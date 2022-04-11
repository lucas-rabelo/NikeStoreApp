import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';

import { Preload } from './src/pages/Preload';
import { Register } from './src/pages/Register';
import { ForgotPassword } from './src/pages/ForgotPassword';
import { SignIn } from './src/pages/SignIn';
import { Home } from './src/pages/Home';
import { ProductDetail } from './src/pages/ProductDetail';

export default function App() {

    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        <AppLoading />
    }
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}