import React, { useState } from 'react';

// components
import { InputSearch } from '../../components/Controllers/InputSearch';
import { CategorySelect } from '../../components/Controllers/CategorySelect';

// styles
import {
    Container,
    Content
} from './styles';

export function Home() {

    const [category, setCategory] = useState<string>('');

    function handleOpenModalFilter() {

    }

    function handleSelectCategory(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Container>
            <Content>
                <InputSearch
                    hasFilter
                    onPress={handleOpenModalFilter}
                />
                <CategorySelect
                    setCategory={handleSelectCategory}
                />
                {/* <RecentlySeen /> */}
            </Content>
        </Container>
    );
}