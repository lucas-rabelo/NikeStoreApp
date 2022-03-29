import React from 'react';
import { Text } from 'react-native';

// components
import { InputSearch } from '../../components/Controllers/InputSearch';

// styles
import {
    Container,
    Content
} from './styles';

export function Home() {
    return (
        <Container>
            <Content>
                <InputSearch />
                {/* <CategorySelect />
                <RecentlySeen /> */}
            </Content>
        </Container>
    );
}