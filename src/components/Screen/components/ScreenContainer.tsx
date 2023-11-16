import {ScrollView, View} from 'react-native';

interface Props {
    children: React.ReactNode;
    backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props){
    // foi passado essa propriedade keyboardShouldPersistTaps="handled" para que clicar em algo q possa ser clicado o teclado não feche
    // mas se clicar em algum lugar onde não precisa ser clicado como o background o teclado fecha
    return (
        <ScrollView keyboardShouldPersistTaps="handled" style={{backgroundColor, flex: 1}}>{children}</ScrollView>
    );
}

export function ViewContainer({children, backgroundColor}: Props){
    return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}
