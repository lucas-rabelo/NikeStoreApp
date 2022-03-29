import React from 'react';

import LogoPreload from '../../assets/preload-image.png';
import { Button } from '../../components/Controllers/Button'

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
                    />
                    <Button
                        type="light"
                        label="Login"
                        activeOpacity={.8}
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