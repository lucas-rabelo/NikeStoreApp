import styled from 'styled-components/native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    checked: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    align-items: center;

    padding: ${RFValue(10)}px;
    margin-right: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;

    background-color: ${({ theme, checked }) =>
        checked ? theme.colors.selected : theme.colors.background};
`;

export const Icon = styled.Image<Props>`
    width: ${RFValue(18)}px;
    height: ${RFValue(18)}px;

    color: ${({ theme, checked }) =>
        checked ? theme.colors.selected : theme.colors.background}}
`;

export const Label = styled.Text<Props>`
    font-size: ${RFValue(12)}px;
    text-align: center;

    margin-top: ${RFValue(10)}px;

    color: ${({ theme, checked }) =>
        checked ? theme.colors.background : theme.colors.primary};
`;