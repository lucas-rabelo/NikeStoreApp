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

import Routes from './src/routes';
import TabRoutes from './src/routes/tab.routes';

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
            <Routes />
        </ThemeProvider>
    );
}