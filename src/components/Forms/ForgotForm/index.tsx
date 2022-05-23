import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProps } from '../../../routes/stack.routes';

// components
import { Button } from '../../Controllers/Button'
import { Input } from '../../Controllers/Input'

// hook
import { useAuth } from '../../../hooks/auth';

// styles
import {
    Container,
    Content,
    ButtonArea
} from './styles';

export function ForgotForm() {

    const { handleForgotPassword } = useAuth();
    const [email, setEmail] = useState<string>('');

    async function handleSubmitForm() {
        await handleForgotPassword(email);
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
                <ButtonArea>
                    <Button
                        type='dark'
                        label="Send email"
                        activeOpacity={.7}
                        onPress={handleSubmitForm}
                    />
                </ButtonArea>
            </Content>
        </Container>
    );
}