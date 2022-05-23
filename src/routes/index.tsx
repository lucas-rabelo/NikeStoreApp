import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import AuthRoutes from './AuthRoutes.routes';
import MarketRoutes from './stack.routes';

import { useAuth } from '../hooks/auth';

export function Routes() {

    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);

        return subscriber;
    }, []);

    return (
        <NavigationContainer>
            {user ? <MarketRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}

export default Routes;