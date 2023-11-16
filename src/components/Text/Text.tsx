import { TextStyle } from 'react-native';

import {createText} from '@shopify/restyle';

import { Theme } from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

//melhor utilizar o type ao invés de enum pra não precisar ficar importando o enum
type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

//Record é basicamente um map() entre duas interfaces
//coloca um $ na frente do nome pra saber q é uma variante de estilo

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},
  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontsFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};

//fazer isso pra contornar uma issue no android q estava dando erro nas fontes
function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontsFamily.blackItalic : $fontsFamily.bold;
  }
  switch (true) {
    case bold && italic:
      return $fontsFamily.boldItalic;
    case bold:
      return $fontsFamily.bold;
    case italic:
      return $fontsFamily.italic;
    case semiBold && italic:
      return $fontsFamily.mediumItalic;
    case semiBold:
      return $fontsFamily.medium;
    default:
      return $fontsFamily.regular;
  }
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold,
  italic,
  semiBold,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText color="backgroundContrast" style={[$fontSizes[preset], {fontFamily}, style]} {...sRTextProps}>
      {children}
    </SRText>
  );
}
