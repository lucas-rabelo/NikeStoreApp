import React from 'react';

// components
import { Product, ProductProps } from '../../Controllers/Product';

import {
    Container
} from './styles';

export interface ProductListProps extends ProductProps {
    id: string;
    description: string;
    category: string;
}

interface Props {
    productSelected: string;
    setProduct: (productId: string) => void;
}

export function RecentlySeen({ productSelected, setProduct }: Props) {
    
    const data: ProductListProps[] = [
        {
            id: "1",
            price: 42.50,
            name: "Nest Doorbell",
            description: "",
            category: "best_deal",
            liked: false
        },
        {
            id: "2",
            price: 42.50,
            name: "Nest Doorbell",
            description: "",
            category: "best_deal",
            liked: true
        },
        {
            id: "3",
            price: 42.50,
            name: "Nest Doorbell",
            description: "",
            category: "best_deal",
            liked: true
        },
        {
            id: "4",
            price: 42.50,
            name: "Nest Doorbell",
            description: "",
            category: "best_deal",
            liked: false
        }
    ]

    function handleFavoriteProduct(productId: string) {
        setProduct(productId);
        alert(productId)
    }

    function handleOpenProduct(productId: string) {
        
    }

    return(
        <Container
            data={data}
            keyExtractor={( item ) => item.id}
            renderItem={({ item }) => (
                <Product
                    price={item.price}
                    name={item.name}
                    liked={item.liked}
                    onPress={() => handleOpenProduct(item.id)}
                    setLike={() => handleFavoriteProduct(item.id)}
                />
            )}
        >
        </Container>
    );
}