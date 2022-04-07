import React from 'react';
import { TouchableOpacityProps, ImageProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// styles
import {
    Container,
    Icon,
    Label
} from './styles';

export interface CategoryProps extends TouchableOpacityProps {
    icon: number;
    label: string;
    checked?: boolean;
}

export function Category({ label, icon, checked, ...rest }: CategoryProps) {

    return (
        <Container
            checked={checked}
            activeOpacity={.7}
            {...rest}
        >
            <Icon
                source={icon}
                checked={checked}
            />
            <Label checked={checked} >{label}</Label>
        </Container>
    );
}