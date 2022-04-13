import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
    checked: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    align-items: center;
    justify-content: center;

    width: ${RFPercentage(12)}px;
    height: ${RFPercentage(6)}px;
    margin-right: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;

    background-color: ${({ theme, checked }) =>
        checked ? theme.colors.selected : theme.colors.background};
`;

export const Icon = styled.Image<Props>`
    width: ${RFValue(28)}px;
    height: ${RFValue(28)}px;

    tint-color: ${({ theme, checked }) =>
        checked ? theme.colors.background : theme.colors.primary}}
`;

export const Label = styled.Text<Props>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.title}
    text-align: center;

    /* margin-top: ${RFValue(10)}px; */

    color: ${({ theme, checked }) =>
        checked ? theme.colors.background : theme.colors.primary};
`;