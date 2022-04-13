import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProps } from '../../../routes/stack.routes';

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

    const navigation = useNavigation<NavigationScreenProps>();

    function handleOpenProduct(productId: string) {
        navigation.navigate('ProductDetail', { productId });
    }

    return (
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
                    {liked ? <LikeAlt name="heart" /> : <Like name="heart" />}
                </ButtonLike>
            </Footer>
        </Container>
    );
}