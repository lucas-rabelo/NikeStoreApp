import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    margin: 0 ${RFValue(18)}px;
    margin-top: ${RFValue(10)}px;

    padding: ${RFValue(15)}px ${RFValue(16)}px;
    border-radius: ${RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: ${RFValue(12)}px;
`;

export const NameCard = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.described};
    color: ${({ theme }) => theme.colors.background};
`;

export const FlagCard = styled(FontAwesome)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const FullValue = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.background};
`;

export const NumberCard = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.described};
    color: ${({ theme }) => theme.colors.background};
`;
