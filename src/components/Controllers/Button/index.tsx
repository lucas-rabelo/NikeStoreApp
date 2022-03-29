import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
    label: string;
    type: 'dark' | 'light';
}

export function Button({ label, type, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Title
                type={type}
            >{label}</Title>
        </Container>
    );
}