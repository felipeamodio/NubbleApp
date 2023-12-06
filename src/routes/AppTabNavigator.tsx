/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Icon, Text } from '@components';
import { HomeScreen, NewPostScreen, FavoriteScreen, MyProfileScreen } from '@screens';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
    HomeScreen: undefined;
    NewPostScreen: undefined;
    FavoriteScreen: undefined;
    MyProfileScreen: undefined;
}

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {

    function renderTabBar(props: BottomTabBarProps){
        return <AppTabBar {...props} />;
    }

    return (
        <Tab.Navigator
            tabBar={renderTabBar}
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({focused}) => (
                        <Text preset="paragraphCaption" semiBold color={focused ? 'primary' : 'backgroundContrast'}>
                            Início
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name={focused ? 'homeFill' : 'home'}
                            color={focused ? 'primary' : 'backgroundContrast'}
                        />),
                }}
            />

            <Tab.Screen name="NewPostScreen" component={NewPostScreen} />

            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />

            <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
        </Tab.Navigator>
    );
}
