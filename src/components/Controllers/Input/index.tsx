import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import theme from '../../../global/styles/theme';

import {
    Container,
    IconContainer,
    InputText
} from './styles';

export type InputProps = TextInputProps & {
    icon: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input({ icon, value, ...rest }: InputProps) {

    const { secondary, primary } = theme.colors;

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
    }
    return (
        <Container >
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={icon}
                    size={24}
                    color={(isFocused || isFilled) ? secondary : primary}
                />
            </IconContainer>

            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                value={value}
                {...rest}
            />
        </Container>
    );
}