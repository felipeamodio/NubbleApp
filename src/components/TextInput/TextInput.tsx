/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react';
import {Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Box, BoxProps } from '../Box/Box';
import { $fontsFamily, $fontSizes, Text } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
    label: string;
    errorMessage?: string;
    RightComponent?: React.ReactElement;
    boxProps?: BoxProps;
}

// flexGrow faz com que ele ocupe todo o espaço dentro do box e o flexShrink faz com que ele não sobrescreva por cima
const $textInputStyle: TextStyle = {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
    fontFamily: $fontsFamily.regular,
    ...$fontSizes.paragraphMedium,
}

export function TextInput({label, errorMessage, RightComponent, boxProps, ...rnTextInputProps}: TextInputProps){
    const {colors} = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    function focusInput(){
        //current é a referencia atual e ela está undefined por isso tem o ?
        inputRef.current?.focus();
    }

    //passar esse Pressable pra ele pegar a referencia da caixa toda, não só da parte onde está o input

    const $textInputContainer: BoxProps = {
        flexDirection: 'row',
        borderWidth: errorMessage ? 2 : 1,
        padding: 's16',
        borderColor: errorMessage ? 'error' : 'gray4',
        borderRadius: 's12',
    }

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
                <Text preset='paragraphMedium' marginBottom='s4'>{label}</Text>
                <Box {...$textInputContainer}>
                    <RNTextInput
                        style={$textInputStyle}
                        placeholderTextColor={colors.gray2}
                        ref={inputRef}
                        {...rnTextInputProps}
                    />
                    {RightComponent &&(
                    <Box ml='s16' justifyContent='center'>
                        {RightComponent}
                    </Box>
                    )}
                </Box>
                {errorMessage && (
                    <Text preset='paragraphSmall' bold color='error'>{errorMessage}</Text>
                )}
            </Pressable>
        </Box>
    )
}