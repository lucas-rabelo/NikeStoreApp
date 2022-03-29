import React, { useState } from 'react';

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

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');

    function handleSubmitForm() {

    }

    return (
        <Container>
            <Content>
                <Input
                    icon='user'
                    placeholder='Enter your name'
                    onChangeText={setName}
                    value={name}
                />
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