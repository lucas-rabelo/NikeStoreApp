import React, { useEffect, useState } from 'react';

// components
import { Header } from '../../components/Layouts/Header';
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
    const [search, setSearch] = useState<string>('');

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
                <Header />
                {/* <InputSearch
                    onChangeText={(t) => setSearch(t)}
                    value={search}
                    onPress={handleOpenModalFilter}
                />
                <Card
                    flag="visa"
                /> */}
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleSelectCategory}
                />
                <RecentlySeen
                    search={search}
                    categorySelected={category}
                    setProduct={handleFavoriteProduct}
                    productSelected={product}
                />
            </Content>
        </Container>
    );
}