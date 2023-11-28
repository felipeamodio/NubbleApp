/* eslint-disable react/react-in-jsx-scope */
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line import/order
import { Button, FormPasswordInput, FormTextInput, Screen, Text } from '@components';

// import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

import { AuthScreenProps } from '@routes';

import {signUpSchema, SignUpSchema} from './signUnSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>){
    // const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            fullName: '',
        },
        mode: 'onChange',
    });

    function submitForm(formValues: SignUpSchema){
        console.log(formValues);
        // reset({
        //     title: 'Sua conta foi criada com sucesso!',
        //     description: 'Agora é só fazer login na nossa plataforma',
        //     icon: {
        //         name: 'checkRound',
        //         color: 'primary'
        //     }
        // })
    }
    return (
        <Screen canGoBack={true}>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <FormTextInput
                control={control}
                name="username"
                label="Seu username"
                placeholder="@"
                boxProps={{mb: 's20'}}
            />

            <FormTextInput
                control={control}
                name="fullName"
                autoCapitalize="words"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                boxProps={{mb: 's20'}}
            />

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{mb: 's20'}}
            />

            <FormPasswordInput
                control={control} //definindo o componente atráves do hook useForm
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{mb: 's48'}}
            />

            <Button
                onPress={handleSubmit(submitForm)}
                title="Criar uma conta"
                disabled={!formState.isValid}
            />
        </Screen>
    );
}
