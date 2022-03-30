import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    IconSearch,
    InputText,
    ButtonFilter,
    IconFilter
} from './styles';

interface Props extends TextInputProps {
    hasFilter?: boolean;
    onPress?: () => void;
}

export function InputSearch({ hasFilter = false, onPress, ...rest }: Props) {

    function handleOpenModalFilter() {

    }

    return (
        <Container>
            <IconSearch name="search" />
            <InputText
                placeholder="Pesquise aqui..."
                hasFilter={hasFilter}
                {...rest}
            />
            {hasFilter &&
                <ButtonFilter
                    onPress={onPress}
                >
                    <IconFilter name="filter" />
                </ButtonFilter>
            }
        </Container>
    );
}