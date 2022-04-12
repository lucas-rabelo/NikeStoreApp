import React, { useEffect, useState } from 'react';

// components
import { Button } from '../../components/Controllers/Button';
import { Counter } from '../../components/Controllers/Counter';
import { HeaderProduct } from '../../components/Layouts/HeaderProduct';
import { CarouselPhotos } from '../../components/Lists/CarouselPhotos';

// styles
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

// storage
import { openProduct } from '../../libs/storage';

// params
interface Params {
    productId: string;
}

// interfaces
export interface DetailsProps {
    id: string;
    price: number;
    photo: number;
    name: string;
    description: string;
    category?: string;
    liked: boolean;
}

export function ProductDetail() {

    // const routes = useRoute();
    // const { productId } = routes.params as Params;

    const [product, setProduct] = useState<DetailsProps>();

    function handleFavoriteProduct() {
        const data: DetailsProps = {
            id: product.id,
            price: product.price,
            photo: product.photo,
            name: product.name,
            description: product.description,
            category: product.category,
            liked: !product.liked
        }

        setProduct(data);
    }

    useEffect(() => {
        const productSelected = openProduct('5');

        if( productSelected ) {
            setProduct(productSelected);
        }
    }, []);

    return (
        <Container>
            <HeaderProduct
                isLiked={product.liked}
                onPress={handleFavoriteProduct}
            />
            <Content>
                <CarouselPhotos
                    photo={product.photo}
                />
                <Informations>
                    <Header>
                        <Title>{product.name}</Title>
                        <Price>$ {product.price}</Price>
                    </Header>
                    <Description>
                        {product.description}
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
                <Counter />
                <Button
                    width="50%"
                    label='Add to Cart'
                    type='dark'
                />
            </Footer>
        </Container>
    );
}