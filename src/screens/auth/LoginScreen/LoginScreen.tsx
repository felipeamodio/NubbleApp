import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({navigation}: ScreenProps){
  function navigateToSignUpScreen(){
    navigation.navigate("SignUpScreen")
  }

    return(
        <Screen>
          <Text preset="headingLarge" italic mb="s8">Olá</Text>
          <Text preset="paragraphLarge" italic mb="s40">Digite seu e-mail e senha para entrar</Text>

            <TextInput errorMessage='mensagem de error' label='Email' placeholder='Digite seu e-mail' boxProps={{mb: "s20"}} />

            <PasswordInput label='Senha' placeholder='Digite sua senha' boxProps={{mb: "s10"}} />

          <Text color="primary" preset="paragraphSmall" bold mt="s10">Esqueci minha senha</Text>

          <Button mt="s48" title="Entrar" />
          <Button onPress={navigateToSignUpScreen} mt="s12" preset="outline" title="Criar uma conta" />
        </Screen>
    )
}