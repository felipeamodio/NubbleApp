import { useNavigation } from '@react-navigation/native';

import { AuthStackParamList } from '@routes';

export function useResetNavigationSuccess(){
    const navigation = useNavigation();

    // usando o typescript pra pegar as tipagens da SuccessScreen
    function reset(params: AuthStackParamList['SuccessScreen']){
        navigation.reset({
            index: 1,
            routes: [
                {
                    name: 'LoginScreen',
                },
                {
                    name: 'SuccessScreen',
                    params,
                },
            ],
        });
    }

    return {reset};
}
