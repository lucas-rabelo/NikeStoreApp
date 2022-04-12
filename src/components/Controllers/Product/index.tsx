import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

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
    photo: number;
    name: string;
    liked?: boolean;
}

export function Product({ id, price, photo, name, liked, ...rest }: ProductProps) {

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
                    source={photo}
                />
            </Header>
            <Footer>
                <Title>{name}</Title>
                <ButtonLike
                    {...rest}
                >
                    { liked ? <LikeAlt name="heart" /> : <Like name="heart" /> }
                </ButtonLike>
            </Footer>
        </Container>
    );
}