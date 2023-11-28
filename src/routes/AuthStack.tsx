/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { IconProps } from '@components';
import { ForgotPasswordScreen, LoginScreen, SignUpScreen, SuccessScreen } from '@screens';

export type AppStackParamList = {
    HomeScreen: undefined;
    SettingsScreen: undefined;
}

export type AuthStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen: {
      title: string;
      description: string;
      icon: Pick<IconProps, 'name' | 'color'>; //pick faz o contrário do Omit, ao invés de omitir, vou escolher apenas as props q quero
    };
    ForgotPasswordScreen: undefined;
   };

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AuthStack(){
    return (
        <Stack.Navigator
         screenOptions={{
           headerShown: false,
           fullScreenGestureEnabled: true, //de qualquer lugar da tela da pra arrastar para dar o goBack
         }}
         initialRouteName="LoginScreen">
         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
         <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
         <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
       </Stack.Navigator>
    );
}
