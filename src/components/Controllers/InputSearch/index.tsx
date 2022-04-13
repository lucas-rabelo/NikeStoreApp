import React from 'react';
import { View, TextInputProps } from 'react-native';

import {
    Container,
    IconSearch,
    InputText,
    ButtonFilter,
    IconFilter
} from './styles';

interface Props extends TextInputProps {
    hasFilter?: boolean;
    isFocused?: boolean;
    onPress?: () => void;
}

export function InputSearch({ hasFilter = false, isFocused = false, onPress, ...rest }: Props) {

    function handleOpenModalFilter() {
        
    }

    return (
        <Container
            isFocused={isFocused}
        >
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