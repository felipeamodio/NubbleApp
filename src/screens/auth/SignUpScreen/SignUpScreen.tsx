/* eslint-disable react/react-in-jsx-scope */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button/Button";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
// import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { RootStackParamList } from "../../../routes/Routes";
import {signUpSchema, SignUpSchema} from './signUnSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps){
    // const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            fullName: '',
        },
        mode: 'onChange'
    });

    function submitForm(formValues: SignUpSchema){
        console.log(formValues)
        // reset({
        //     title: 'Sua conta foi criada com sucesso!',
        //     description: 'Agora é só fazer login na nossa plataforma',
        //     icon: {
        //         name: 'checkRound',
        //         color: 'primary'
        //     }
        // })
    }
    return(
        <Screen canGoBack={true}>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <FormTextInput
                control={control}
                name="username"
                label="Seu username"
                placeholder="@"
                boxProps={{mb: "s20"}}
            />

            <FormTextInput
                control={control}
                name="fullName"
                autoCapitalize="words"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                boxProps={{mb: "s20"}}
            />

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{mb: "s20"}}
            />

            <FormPasswordInput 
                control={control} //definindo o componente atráves do hook useForm
                name='password'
                label='Senha' 
                placeholder='Digite sua senha' 
                boxProps={{mb: "s48"}}
            />

            <Button 
                onPress={handleSubmit(submitForm)}
                title="Criar uma conta"
                disabled={!formState.isValid}
            />
        </Screen>
    )
}