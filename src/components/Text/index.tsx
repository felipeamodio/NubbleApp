/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {TextProps as RNTextProps, TextStyle} from 'react-native';
import * as S from './styles';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
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

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},
  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
}

export function Text({children, preset = 'paragraphMedium', style, ...rest}: TextProps) {
  return (
    <S.Label style={[$fontSizes[preset], style]} {...rest}>
      {children}
    </S.Label>
  );
}
