/* eslint-disable react/react-in-jsx-scope */
import { useForm, Controller } from 'react-hook-form';
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { Alert } from "react-native";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
type LoginFormType = {
  email: string;
  password: string;
}

export function LoginScreen({navigation}: ScreenProps){

  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange' //mode vai aplicar quando vai ser chamado as regras. Ex: não estava pegando a regra de errorMessage antes de setar o mode
  });

  function submitForm({email, password}: LoginFormType){
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`)
  }
  
  function navigateToSignUpScreen(){
    navigation.navigate("SignUpScreen")
  }

  function navigateToForgotPassword(){
    navigation.navigate("ForgotPasswordScreen")
  }

    return(
        <Screen>
          <Text preset="headingLarge" italic mb="s8">Olá</Text>
          <Text preset="paragraphLarge" italic mb="s40">Digite seu e-mail e senha para entrar</Text>

          <Controller 
            control={control} //definindo o componente atráves do hook useForm
            name='email'
            rules={{
              required: 'Campo obrigatório', //aqui pode passar um boolean ou uma mensagem
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, //REGEX de e-mail
                message: 'E-mail inválido',
              }
            }}
            render={({field, fieldState}) => (
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                label='Email' 
                placeholder='Digite seu e-mail' 
                boxProps={{mb: "s20"}}
              />
            )}
          />

          <Controller 
            control={control} //definindo o componente atráves do hook useForm
            name='password'
            rules={{
              required: 'Campo obrigatório', //aqui pode passar um boolean ou uma mensagem
              minLength: {
                value: 8,
                message: 'Senha deve ter no mínimo 8 caracteres',
              }
            }}
            render={({field, fieldState}) => (
              <PasswordInput
                value={field.value}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message} 
                label='Senha' 
                placeholder='Digite sua senha' 
                boxProps={{mb: "s10"}} 
              />
            )}
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
    )
}