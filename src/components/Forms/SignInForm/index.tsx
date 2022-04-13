import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationScreenProps, ScreensProps } from '../../../routes/stack.routes';

// components
import { Button } from '../../Controllers/Button'
import { Input } from '../../Controllers/Input'

// styles
import {
    Container,
    Content,
    ButtonArea,
    ForgotArea,
    ForgotButton,
    Subtitle
} from './styles';

export function SignInForm() {

    const navigation = useNavigation<NavigationScreenProps>();

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    function handleSubmitForm() {
        navigation.navigate('Home');
    }

    function handleForgotPassword() {
        navigation.navigate('ForgotPassword');
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
                        <ForgotButton
                            onPress={handleForgotPassword}
                        >
                            <Subtitle>I forgot my password</Subtitle>
                        </ForgotButton>
                    </ForgotArea>
                </ButtonArea>
            </Content>
        </Container>
    );
}