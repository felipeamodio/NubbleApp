import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { HomeScreen, SettingsScreen } from '@screens';

export type AppStackParamList = {
    HomeScreen: undefined;
    SettingsScreen: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack(){
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: true, //de qualquer lugar da tela da pra arrastar para dar o goBack
            }}
            initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
