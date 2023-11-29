// declaração de forma global para ser utilizado no hook de navegação para pegar o nome das páginas que vamos navegar

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from './AppStack';
import { AppTabBottomTabParamList } from './AppTabNavigator';
import { AuthStackParamList } from './AuthStack';

declare global{
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParamList, AppStackParamList {}
    }
}

//criando de forma genérica o type das screens
export type AppScreenProps<RouteName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RouteName>;

//dando acesso a navegação tanto para as tabs quanto para as stacks
//dessa forma é melhor a navegação para quando formos para alguma tela q não vai ter a bottom tabs como o caso da settings
export type AppTabScreenProps<RouteName extends keyof AppTabBottomTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>
