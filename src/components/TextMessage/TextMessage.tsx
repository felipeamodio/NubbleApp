import {useRef} from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from 'react-native';

import {$textInputStyle, Box, Text} from '@components';
import { useAppTheme } from '@hooks';

interface TextMessageProps extends RNTextInputProps{
    onPressSend: (message: string) => void;
}
export function TextMessage({onPressSend, value, ...rnTextInputProps}: TextMessageProps){
    const inputRef = useRef<RNTextInput>(null);
    const {colors} = useAppTheme();

    function focusInput(){
        inputRef.current?.focus();
    }

    const sendIsDisabled = value?.trim().length === 0; //esse trim é pra não deixar digirar algo em branco

    return (
        <Pressable onPress={focusInput}>
            <Box
                paddingHorizontal="s16"
                paddingVertical="s14"
                backgroundColor="gray5"
                borderRadius="s12"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <RNTextInput
                    autoCapitalize="none"
                    placeholderTextColor={colors.gray2}
                    ref={inputRef}
                    value={value}
                    style={[$textInputStyle, {color: colors.gray1}]}
                    {...rnTextInputProps}
                />
                <Pressable disabled={sendIsDisabled} onPress={() => onPressSend(value || '')}>
                    <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>Enviar</Text>
                </Pressable>
            </Box>
        </Pressable>
    );
}
