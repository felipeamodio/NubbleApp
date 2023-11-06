import { useState } from "react";
import { Icon } from "../Icon/Icon";
import { TextInput, TextInputProps } from "../TextInput/TextInput";

// não vou passar o extends pq não tem nenhuma lógica diferente, vai ser exatamente igual
type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps){
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    function toggleSecureTextEntry(){
        //o prev sempre vai pegar o previous do estado
        //não precisa passar o estado direto como !isSecureTextEntry
        setIsSecureTextEntry(prev => !prev);
    }

    return(
        <TextInput
            secureTextEntry={isSecureTextEntry}
            {...props}
            RightComponent={
                <Icon onPress={toggleSecureTextEntry} color="gray2" name={isSecureTextEntry ? "eyeOn" : "eyeOff"} />
            }
        />
    )
}