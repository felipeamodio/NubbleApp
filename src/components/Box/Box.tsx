import {TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps} from 'react-native';

import {
    createBox,
    createRestyleComponent,
    backgroundColor,
    BackgroundColorProps,
    spacing,
    SpacingProps,
    layout,
    LayoutProps,
    border,
    BorderProps,
    spacingShorthand,
    SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>

// o & sozinho é pra fazer união
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
SpacingProps<Theme> &
LayoutProps<Theme> &
BorderProps<Theme> &
SpacingShorthandProps<Theme> &
RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([
    backgroundColor,
    spacing,
    spacingShorthand,
    layout,
    border,
], TouchableOpacity);
