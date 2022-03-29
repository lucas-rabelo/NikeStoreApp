import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

// components
import { SignInForm } from '../../components/Forms/SignInForm';

// styles
import {
    Container,
    Content,
    Title,
} from './styles';

export function SignIn() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="position" enabled>
                    <Content>
                        <Title>Log in {'\n'}App</Title>
                        <SignInForm />
                    </Content>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}