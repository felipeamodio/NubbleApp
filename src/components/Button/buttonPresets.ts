import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';
import { ButtonPreset } from './Button';

interface ButtonUI {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

//mapeando as propriedades do botão
export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
    primary: {
        container: {
            backgroundColor: 'primary',
        },
        content: 'primaryContrast',
    },
    outline:  {
        container: {
            borderWidth: 1,
            borderColor: 'primary',
        },
        content: 'primary',
    },
    secondary:  {
        container: {
            backgroundColor: 'carrotSecondary',
        },
        content: 'primaryContrast',
    },
    secondaryOutline:  {
        container: {
            borderWidth: 1,
            borderColor: 'carrotSecondary',
        },
        content: 'carrotSecondary',
    },
};