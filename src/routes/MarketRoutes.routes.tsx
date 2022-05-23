import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Preload } from '../pages/Preload';
import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';
import { ForgotPassword } from '../pages/ForgotPassword';

import theme from '../global/styles/theme';

export type ScreensProps = {
    Preload: undefined;
    SignIn: undefined;
    Register: undefined;
    ForgotPassword: undefined;
}

export type NavigationScreenProps = StackNavigationProp<ScreensProps, 'Preload'>;

const { Navigator, Screen } = createStackNavigator<ScreensProps>();

const AppRoutes: React.FC = () => (
    <Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: theme.colors.transparent
            }
        }}
    >
        <Screen
            name="Preload"
            component={Preload}
        />
        <Screen
            name="SignIn"
            component={SignIn}
        />
        <Screen
            name="ForgotPassword"
            component={ForgotPassword}
        />
        <Screen
            name="Register"
            component={Register}
        />
    </Navigator>
)

export default AppRoutes;