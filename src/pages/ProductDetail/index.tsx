import React, { useState } from 'react';

// components
import { Button } from '../../components/Controllers/Button';
import { Counter } from '../../components/Controllers/Counter';
import { HeaderProduct } from '../../components/Layouts/HeaderProduct';
import { CarouselPhotos } from '../../components/Lists/CarouselPhotos';

import {
    Container,
    Content,
    Informations,
    Header,
    Title,
    Price,
    Description,
    Divider,
    Footer,
} from './styles';

interface Props {
    productId: string;
}

export function ProductDetail() {

    const [photo, setPhoto] = useState<string>('');
    const [count, setCount] = useState<number>(0);

    return (
        <Container>
            <HeaderProduct
                isLiked={true}
            />
            <Content>
                <CarouselPhotos
                // showPhoto={photo}
                />
                <Informations>
                    <Header>
                        <Title>Jordam Zoom Separate PF - Basketball Shoes</Title>
                        <Price>$18.50</Price>
                    </Header>
                    <Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia odio expedita accusantium ex,
                        ab illum aut id numquam excepturi odit.
                    </Description>
                    <Divider />
                </Informations>
            </Content>
            <Footer
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 20,
                    },
                    shadowOpacity: .3,
                    shadowRadius: 14.78,
                    elevation: 3,
                }}
            >
                <Counter
                />
                <Button
                    width="50%"
                    label='Add to Cart'
                    type='dark'
                />
            </Footer>
        </Container>
    );
}