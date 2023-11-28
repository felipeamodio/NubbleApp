// declaração de forma global para ser utilizado no hook de navegação para pegar o nome das páginas que vamos navegar

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from './AppStack';
import { AuthStackParamList } from './AuthStack';

declare global{
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParamList, AppStackParamList {}
    }
}

//criando de forma genérica o type das screens
export type AppScreenProps<RouteName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RouteName>;
