import React, { useState } from 'react';

// components
import { Button } from '../../Controllers/Button'
import { Input } from '../../Controllers/Input'

// styles
import {
    Container,
    Content,
    ButtonArea,
    ForgotArea,
    Subtitle
} from './styles';

export function SignInForm() {

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    function handleSubmitForm() {

    }

    function handleForgotPassword() {

    }

    return (
        <Container>
            <Content>
                <Input
                    icon='mail'
                    placeholder='Enter your email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <Input
                    icon='lock'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={setPass}
                    value={pass}
                />
                <ButtonArea>
                    <Button
                        type='dark'
                        label="Save"
                        activeOpacity={.7}
                        onPress={handleSubmitForm}
                    />
                    <ForgotArea>
                        <Subtitle>I forgot my password</Subtitle>
                    </ForgotArea>
                </ButtonArea>
            </Content>
        </Container>
    );
}