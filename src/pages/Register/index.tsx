import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

// components
import { RegisterForm } from '../../components/Forms/RegisterForm';

// styles
import {
    Container,
    Content,
    Title,
} from './styles';

export function Register() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="position" enabled>
                    <Content>
                        <Title>Create an {'\n'}account</Title>
                        <RegisterForm />
                    </Content>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}