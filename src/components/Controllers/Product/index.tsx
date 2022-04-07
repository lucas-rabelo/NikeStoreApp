import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
    Container,
    Header,
    PriceProduct,
    PhotoProduct,
    Footer,
    Title,
    ButtonLike,
    Like,
    LikeAlt
} from './styles';

export interface ProductProps extends TouchableOpacityProps {
    price: number;
    name: string;
    liked?: boolean;
}

interface Props extends ProductProps {
    setLike: (productId: string) => void;
}

export function Product({ price, name, liked, ...rest }: Props) {
    return(
        <Container
            activeOpacity={.7}
            {...rest}
        >
            <Header>
                <PriceProduct>$ {price}</PriceProduct>
                {/* <PhotoProduct 
                    source={}
                /> */}
            </Header>
            <Footer>
                <Title>{name}</Title>
                <ButtonLike>
                    { liked ? <LikeAlt name="heart" /> : <Like name="heart" />}
                </ButtonLike>
            </Footer>
        </Container>
    );
}