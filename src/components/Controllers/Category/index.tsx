import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';

// styles
import {
    Container,
    Label
} from './styles';
import theme from '../../../global/styles/theme';

export interface CategoryProps extends TouchableOpacityProps {
    icon: React.FC<SvgProps>;
    label: string;
    checked?: boolean;
}

export function Category({ label, icon: Icon, checked = false, ...rest }: CategoryProps) {

    const { selected, background } = theme.colors;

    return (
        <Container
            checked={checked}
            {...rest}
        >
            <Icon
                width={RFValue(18)}
                height={RFValue(18)}
                color={checked ? selected : background}
            />
            <Label checked={checked} >{label}</Label>
        </Container>
    );
}