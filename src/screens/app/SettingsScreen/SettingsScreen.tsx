/* eslint-disable @typescript-eslint/no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from 'src/routes/AppStack';

import { Screen, Text } from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen(props: ScreenProps){
    return (
        <Screen canGoBack>
            <Text preset="headingLarge">Settings Screen</Text>
        </Screen>
    );
}
