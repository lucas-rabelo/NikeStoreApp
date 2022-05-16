import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Preload } from '../pages/Preload';
import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ProductDetail } from '../pages/ProductDetail';

import theme from '..//global/styles/theme';

import TabRoutes from './tab.routes';

export type ScreensProps = {
    Home: undefined;
    Preload: undefined;
    SignIn: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    Profile: undefined;
    Cart: undefined;
    ListProducts: undefined;
    ProductDetail: { productId: string };
}

export type NavigationScreenProps = StackNavigationProp<ScreensProps, 'Home'>;

const { Navigator, Screen } = createStackNavigator<ScreensProps>();

const AppRoutes: React.FC = () => (
    <Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: theme.colors.transparent
            }
        }}
    >
        {/* <Screen
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
        /> */}
        <Screen
            name="Home"
            component={TabRoutes}
        />
        <Screen
            name="ListProducts"
            component={TabRoutes}
        />
        <Screen
            name="Profile"
            component={TabRoutes}
        />
        <Screen
            name="Cart"
            component={TabRoutes}
        />
        <Screen
            name="ProductDetail"
            component={ProductDetail}
        />
    </Navigator>
)

export default AppRoutes;