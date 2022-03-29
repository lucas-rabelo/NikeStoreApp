import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    IconSearch,
    InputText,
} from './styles';

interface Props extends TextInputProps { }

export function InputSearch({ ...rest }: Props) {
    return (
        <Container>
            <IconSearch name="search" />
            <InputText
                {...rest}
            />
        </Container>
    );
}