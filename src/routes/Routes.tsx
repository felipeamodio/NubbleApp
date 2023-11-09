import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { IconProps } from '../components/Icon/Icon';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
 import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
 import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';
 
 // tipagem para as rotas
 export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>; //pick faz o contrário do Omit, ao invés de omitir, vou escolher apenas as props q quero
  };
  ForgotPasswordScreen: undefined;
 };

 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 export function Router() {
   return (
     <NavigationContainer>
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
     </NavigationContainer>
   );
 }