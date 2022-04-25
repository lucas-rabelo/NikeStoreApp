import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
    label: string;
    type: 'dark' | 'light';
    width?: string;
}

export function Button({ label, width = '100%', type, ...rest }: Props) {
    return (
        <Container
            style={[ width && { width: width } ]}
            type={type}
            {...rest}
        >
            <Title
                type={type}
            >{label}</Title>
        </Container>
    );
}