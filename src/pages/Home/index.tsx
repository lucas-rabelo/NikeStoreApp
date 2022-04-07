import React, { useState } from 'react';

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

export function Home() {

    const [category, setCategory] = useState<string>('');
    const [product, setProduct] = useState<string>('');

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
                    setProduct={handleFavoriteProduct}
                    productSelected={product}
                />
            </Content>
        </Container>
    );
}