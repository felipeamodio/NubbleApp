import {ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps} from 'react-native';

import { useTheme } from '@shopify/restyle';

import { Theme, ThemeColors } from '@theme';

//esse Omit ele omite que use a propriedade color do componente original
interface Props extends Omit<ActivityIndicatorProps, 'color'> {
    color: ThemeColors;
}

export function ActivityIndicator({color}: Props){
    const {colors} = useTheme<Theme>();

    return <RNActivityIndicator color={colors[color]} />;
}
