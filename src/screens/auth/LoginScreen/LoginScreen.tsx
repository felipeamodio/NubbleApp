import { Alert } from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';

import {Text, Button, Screen, FormTextInput, FormPasswordInput} from '@components';
import { RootStackParamList } from '@routes';


import {loginSchema, LoginSchema} from './loginSchema';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({navigation}: ScreenProps){

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange', //mode vai aplicar quando vai ser chamado as regras. Ex: não estava pegando a regra de errorMessage antes de setar o mode
  });

  function submitForm({email, password}: LoginSchema){
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
  }

  function navigateToSignUpScreen(){
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPassword(){
    navigation.navigate('ForgotPasswordScreen');
  }

    return (
        <Screen>
          <Text preset="headingLarge" italic mb="s8">Olá</Text>
          <Text preset="paragraphLarge" italic mb="s40">Digite seu e-mail e senha para entrar</Text>

          <FormTextInput
            control={control} //definindo o componente atráves do hook useForm
            name="email"
            label="Email"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />

          <FormPasswordInput
            control={control} //definindo o componente atráves do hook useForm
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's10'}}
          />

          <Text onPress={navigateToForgotPassword} color="primary" preset="paragraphSmall" bold mt="s10">Esqueci minha senha</Text>

          <Button
            mt="s48"
            title="Entrar"
            onPress={handleSubmit(submitForm)}
            disabled={!formState.isValid}
          />
          <Button onPress={navigateToSignUpScreen} mt="s12" preset="outline" title="Criar uma conta" />
        </Screen>
    );
}
