import React from 'react';

import auth from '@react-native-firebase/auth';

import {
    Container,
    AreaLabel,
    Greeting,
    GreetingSecondary,
    LogoutButton,
    LogoutIcon
} from './styles';

export function Header() {

    function handleSignOut() {
        auth()
            .signOut();
    }

    return (
        <Container>
            <AreaLabel>
                <Greeting>Hello!</Greeting>
                <GreetingSecondary>Welcome to NikeStoreApp!</GreetingSecondary>
            </AreaLabel>

            <LogoutButton
                onPress={handleSignOut}
            >
                <LogoutIcon name="log-out" />
            </LogoutButton>
        </Container>
    );
}