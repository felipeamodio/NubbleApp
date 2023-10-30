import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";

export function SignUpScreen(){
    function submitForm(){
        //TODO: implementar
    }
    return(
        <Screen canGoBack={true}>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <TextInput label="Nome completo" placeholder="@" boxProps={{mb: "s20"}} />

            <TextInput label="E-mail" placeholder="Digite seu nome completo" boxProps={{mb: "s20"}} />

            <TextInput label="Seu username" placeholder="Digite seu e-mail" boxProps={{mb: "s20"}} />

            <TextInput 
                label="Senha"
                placeholder="Digite sua senha"
                RightComponent={<Icon color="gray2" name="eyeOn" />}
                boxProps={{mb: "s48"}}
            />

            <Button 
                onPress={submitForm}
                title="Criar uma conta"
            />
        </Screen>
    )
}