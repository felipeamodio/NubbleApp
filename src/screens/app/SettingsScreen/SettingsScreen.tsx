/* eslint-disable @typescript-eslint/no-unused-vars */
import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>){
    return (
        <Screen canGoBack>
            <Text preset="headingLarge">Settings Screen</Text>
        </Screen>
    );
}
