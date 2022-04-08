import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

import {
    Container,
    PlusButton,
    PlusIcon,
    Count,
    LessButton,
    LessIcon,
} from './styles';

export function Counter() {

    const [count, setCount] = useState<number>(0);

    function handleAddProduct() {
        setCount(oldState => oldState + 1);
    }

    function handleRemoveProduct() {
        setCount(oldState => oldState - 1);
    }

    return (
        <Container>
            <LessButton
                onPress={handleRemoveProduct}
            >
                <LessIcon />
            </LessButton>
            <Count>{count}</Count>
            <PlusButton
                onPress={handleAddProduct}
            >
                <PlusIcon name="plus" />
            </PlusButton>
        </Container>
    );
}