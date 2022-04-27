import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';
import StackNotSignedRoutes from './stackSigned.routes';

import { useAuth } from '../hooks/auth';

export function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {!user.token ? <StackNotSignedRoutes /> : <StackRoutes />}
        </NavigationContainer>
    )
}

export default Routes;