import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { TextInput, TextInputProps } from '@components';

/* eslint-disable react/react-in-jsx-scope */

//passar a interface do tipo do fomulário com o FormType se não ele não pega toda referencia de tipagem nas propriedades
// passar o FieldValues para aceitar interface genérica

// export function FormTextInput({control, name, rules, ...textInputProps}: TextInputProps & {control: any; name: string; rules: any;}){
export function FormTextInput<FormType extends FieldValues>({control, name, rules, ...textInputProps}: TextInputProps & UseControllerProps<FormType>){
    return (
        <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field, fieldState}) => (
                    <TextInput
                        value={field.value}
                        onChangeText={field.onChange}
                        errorMessage={fieldState.error?.message}
                        {...textInputProps}
                     />
                )}
            />
    );
}
