import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProps } from '../../../routes/stack.routes';

// components
import { Button } from '../../Controllers/Button'
import { Input } from '../../Controllers/Input'

// styles
import {
    Container,
    Content,
    ButtonArea
} from './styles';

export function ForgotForm() {

    const navigation = useNavigation<NavigationScreenProps>();

    const [email, setEmail] = useState<string>('');

    function handleSubmitForm() {
        navigation.navigate('Preload');
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
                        label="Save"
                        activeOpacity={.7}
                        onPress={handleSubmitForm}
                    />
                </ButtonArea>
            </Content>
        </Container>
    );
}