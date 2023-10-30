import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";

export function LoginScreen(){
    return(
        <Screen>
          <Text preset="headingLarge" italic mb="s8">Olá</Text>
          <Text preset="paragraphLarge" italic mb="s40">Digite seu e-mail e senha para entrar</Text>

            <TextInput errorMessage='mensagem de error' label='Email' placeholder='Digite seu e-mail' boxProps={{mb: "s20"}} />

            <TextInput label='Senha' placeholder='Digite sua senha' RightComponent={<Icon name='eyeOn' color='gray2' />} boxProps={{mb: "s10"}} />

          <Text color="primary" preset="paragraphSmall" bold mt="s10">Esqueci minha senha</Text>

          <Button mt="s48" title="Entrar" />
          <Button mt="s12" preset="outline" title="Criar uma conta" />
        </Screen>
    )
}