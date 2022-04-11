import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {} from 'react'

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
    id: string;
    price: number;
    photo?: string;
    name: string;
    liked?: boolean;
}

interface Props extends ProductProps {
    setLike?: (productId: string) => void;
}

export function Product({ id, price, photo, name, liked, ...rest }: Props) {

    // const navigate = useNavigation();

    function handleOpenProduct(productId: string) {
        // navigate.navigation('ProductDetail', { productId });
        alert('Abriu o produto: '+ productId);
    }

    return(
        <Container
            activeOpacity={.7}
            onPress={() => handleOpenProduct(id)}
        >
            <Header>
                <PriceProduct>$ {price}</PriceProduct>
                <PhotoProduct
                    resizeMode='contain'
                    source={{uri: photo}}
                />
            </Header>
            <Footer>
                <Title>{name}</Title>
                <ButtonLike
                    {...rest}
                >
                    { liked ? <LikeAlt name="heart" /> : <Like name="heart" />}
                </ButtonLike>
            </Footer>
        </Container>
    );
}