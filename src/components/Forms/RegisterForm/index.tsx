import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../../hooks/auth';

// components
import { Button } from '../../Controllers/Button'
import { Input } from '../../Controllers/Input'

// styles
import {
    Container,
    Content,
    ButtonArea
} from './styles';

export function RegisterForm() {

    const { handleRegisterOnApp } = useAuth();

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');

    async function handleSubmitForm() {
        if (pass === confirm) {
            await handleRegisterOnApp(email, pass);
        }
        else {
            Alert.alert("Aviso", "As senhas são diferentes");
        }
    }

    return (
        <Container>
            <Content>
                {/* <Input
                    icon='user'
                    placeholder='Enter your name'
                    onChangeText={setName}
                    value={name}
                /> */}
                <Input
                    icon='mail'
                    placeholder='Enter your email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                // value={email}
                />
                <Input
                    icon='lock'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={setPass}
                // value={pass}
                />
                <Input
                    icon='lock'
                    placeholder="Repeat your password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={setConfirm}
                    value={confirm}
                />
                <ButtonArea>
                    <Button
                        type='dark'
                        label="Save"
                        activeOpacity={.7}
                        onPress={handleSubmitForm}
                    />
                </ButtonArea>
            </Content>
        </Container>
    );
}