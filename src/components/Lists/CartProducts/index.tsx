import React, { useEffect, useState } from 'react';

// assets
import Metcon4Png from '../../../assets/products/nike-metcon-4.png';

// components
import { CartProduct, CartProductProps } from '../../Controllers/CartProduct';

// styles
import {
    Container
} from './styles';

export function CartProducts() {

    const [data, setData] = useState<CartProductProps[]>([]);

    function handleRemoveProduct() {

    }

    function handleFavoriteProduct() {

    }

    useEffect(() => {
        const product = [
            {
                data: {
                    id: '1',
                    name: "Cross Training/Weightlifting Shoe. Nike ID",
                    photo: Metcon4Png,
                    deliveredTime: 'April 4th to April 15th',
                    quantity: 2,
                    price: 851.98
                }
            },
            {
                data: {
                    id: '2',
                    name: "Cross Training/Weightlifting Shoe. Nike ID",
                    photo: Metcon4Png,
                    deliveredTime: 'April 4th to April 15th',
                    quantity: 2,
                    price: 851.98
                }
            },
        ]
        
        setData(product);
    }, []);

    return(
        <Container
            data={data}
            keyExtractor={( item ) => item.data.id}
            renderItem={({ item }) => (
                <CartProduct
                    data={item.data}
                    handleRemove={handleRemoveProduct}
                    handleFavorite={handleFavoriteProduct}
                />
            )}
        />
    );
}