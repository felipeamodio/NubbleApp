import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { PasswordInput, PasswordInputProps } from '@components';

/* eslint-disable react/react-in-jsx-scope */
export function FormPasswordInput<FormType extends FieldValues>({control, name, rules, ...passwordInputProps}: PasswordInputProps & UseControllerProps<FormType>){
    return (
        <Controller
            control={control} //definindo o componente atráves do hook useForm
            name={name}
            rules={rules}
            render={({field, fieldState}) => (
              <PasswordInput
                value={field.value}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                {...passwordInputProps}
              />
            )}
          />
    );
}
