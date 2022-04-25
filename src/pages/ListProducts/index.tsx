import React, { useState } from 'react';

// components
import { InputSearch } from '../../components/Controllers/InputSearch';
import { FilterForm } from '../../components/Forms/FilterForm';
import { RecentlySeen } from '../../components/Lists/RecentlySeen';
import { ModalView } from '../../components/Layouts/ModalView';

import {
    Container,
    Title
} from './styles';

export function ListProducts() {

    const [product, setProduct] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    function handleFavoriteProduct(productId: string) {
        productId === product ? setProduct('') : setProduct(productId);
    }

    function handleOpenFilter() {
        // alert('filter')
    }

    return (
        <Container>
            <InputSearch
                onChangeText={(t) => setSearch(t)}
                value={search}
                hasFilter
                onPress={handleOpenFilter}
            />
            <RecentlySeen
                search={search}
                productSelected={product}
                setProduct={handleFavoriteProduct}
                categorySelected={category}
            />
            <ModalView
                visible={modal}
                closeModal={() => setModal(!modal)}
            >
                <FilterForm

                />
            </ModalView>
        </Container>
    );
}