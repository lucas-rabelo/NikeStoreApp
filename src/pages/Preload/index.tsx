import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// assets
import LogoPreload from '../../assets/products/preload-image.png';

// components
import { Button } from '../../components/Controllers/Button';

// props
import { NavigationScreenProps, ScreensProps } from '../../routes/stack.routes';

// styles
import {
    Container,
    Content,
    TitleArea,
    Title,
    Subtitle,
    ImageContent,
    Footer,
} from './styles';

export function Preload() {

    const navigation = useNavigation<NavigationScreenProps>();

    function handleRegister() {
        navigation.navigate('Register');
    }

    function handleSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <Container>
            <Content>
                <TitleArea>
                    <Subtitle>Solution od search product of NikeStore</Subtitle>
                    <Title>
                        All that you need, {"\n"}
                        All that you want just here at all!
                    </Title>
                </TitleArea>
                <ImageContent
                    source={LogoPreload}
                />
                <Footer>
                    <Button
                        type='dark'
                        label="Create account"
                        activeOpacity={.8}
                        onPress={handleRegister}
                    />
                    <Button
                        type="light"
                        label="Login"
                        activeOpacity={.8}
                        onPress={handleSignIn}
                    />
                    <Subtitle>
                        By proceeding, I accept that Shopx Shopping Service and confirm that I have read Klarna's Privacy Policy.
                        Links in the app are sponsored.
                    </Subtitle>
                </Footer>
            </Content>
        </Container>
    );
}