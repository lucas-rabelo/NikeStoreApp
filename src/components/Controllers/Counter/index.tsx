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

interface Props {
    setPlus: () => void;
    setLess: () => void;
    count: number;
}

export function Counter({ setLess, setPlus, count }: Props) {
    return (
        <Container>
            <LessButton
                onPress={setLess}
            >
                <LessIcon />
            </LessButton>
            <Count>{count}</Count>
            <PlusButton
                onPress={setPlus}
            >
                <PlusIcon name="plus" />
            </PlusButton>
        </Container>
    );
}