import React, { useEffect, useState } from 'react';
import { products } from '../../../utils/products';

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
    categorySelected: string;
    setProduct: (productId: string) => void;
}

export function RecentlySeen({ categorySelected, productSelected, setProduct }: Props) {
    
    const [data, setData] = useState<ProductListProps[]>([]);

    function handleFavoriteProduct(productId: string) {
        setProduct(productId);

        data.find((product) => {
            if( product.id === productId ) {
                return product.liked = !product.liked;
            }
        });
    }

    useEffect(() => {
        if( categorySelected == '' ) {
            setData(products);
        } else {
            setData(
                products.filter(product => {
                    if(product.category.indexOf(categorySelected) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            )
        }
    }, [categorySelected]);

    return(
        <Container
            data={data}
            keyExtractor={( item ) => item.id}
            renderItem={({ item }) => (
                <Product
                    id={item.id}
                    price={item.price}
                    name={item.name}
                    liked={item.liked}
                    onPress={() => handleFavoriteProduct(item.id)}
                />
            )}
        >
        </Container>
    );
}