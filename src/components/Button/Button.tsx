/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {Text} from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';

export function Button(){
    const {colors} = useTheme<Theme>();

    return(
        <View>
            <Text preset="headingLarge" bold>BOTAO</Text>
        </View>
    )
}