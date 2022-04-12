import React, { useEffect, useState } from 'react';

// components
import { Card } from '../../components/Controllers/Card';
import { InputSearch } from '../../components/Controllers/InputSearch';
import { RecentlySeen } from '../../components/Lists/RecentlySeen';
import { CategorySelect } from '../../components/Lists/CategorySelect';

// styles
import {
    Container,
    Content
} from './styles';

import { products } from '../../utils/products';

export function Home() {

    const [category, setCategory] = useState<string>('');
    const [product, setProduct] = useState<string>('');

    useEffect(() => {
        console.log(products);
    }, []);

    function handleOpenModalFilter() {

    }

    function handleSelectCategory(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleFavoriteProduct(productId: string) {
        productId === product ? setProduct('') : setProduct(productId);
    }

    return (
        <Container>
            <Content>
                <InputSearch
                    onPress={handleOpenModalFilter}
                />
                <Card 
                    flag="visa"
                />
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleSelectCategory}
                />
                <RecentlySeen
                    categorySelected={category}
                    setProduct={handleFavoriteProduct}
                    productSelected={product}
                />
            </Content>
        </Container>
    );
}