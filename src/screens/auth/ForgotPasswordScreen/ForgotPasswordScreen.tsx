import {zodResolver} from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, Screen, Text, FormTextInput } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import {forgotPasswordSchema, ForgotPasswordSchema} from './forgotPasswordSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: AuthScreenProps<'ForgotPasswordScreen'>){
    const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });
    function submitForm(values: ForgotPasswordSchema){
        console.log(values);
        reset({
            title: `Enviamos as instruções ${'\n'}para seu e-mail`,
            description: 'Clique no link enviado para seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'primary',
            },
        });
    }

    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mb="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

            <FormTextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{mb: 's40'}}
                control={control}
                name="email"

            />

            <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Recuperar senha" />
        </Screen>
    );
}
