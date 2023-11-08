import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps){
    const {reset} = useResetNavigationSuccess();
    function submitForm(){
        reset({
            title: 'Sua conta foi criada com sucesso!',
            description: 'Agora é só fazer login na nossa plataforma',
            icon: {
                name: 'checkRound',
                color: 'primary'
            }
        })
    }
    return(
        <Screen canGoBack={true}>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <TextInput label="Nome completo" placeholder="@" boxProps={{mb: "s20"}} />

            <TextInput label="E-mail" placeholder="Digite seu nome completo" boxProps={{mb: "s20"}} />

            <TextInput label="Seu username" placeholder="Digite seu e-mail" boxProps={{mb: "s20"}} />

            <PasswordInput 
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{mb: "s48"}}
            />

            <Button 
                onPress={submitForm}
                title="Criar uma conta"
            />
        </Screen>
    )
}