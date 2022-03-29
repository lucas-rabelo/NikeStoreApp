import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

// components
import { ForgotForm } from '../../components/Forms/ForgotForm';

import {
    Container,
    Content,
    Title
} from './styles';

export function ForgotPassword() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="position" enabled>
                    <Content>
                        <Title>Recover your {'\n'}account</Title>
                        <ForgotForm />
                    </Content>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}