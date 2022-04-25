import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight() + RFValue(15)}px;
`;

export const Header = styled.View`
    width: 90%;

    background-color: ${({ theme }) => theme.colors.background};
    padding: ${RFValue(15)}px ${RFValue(20)}px;
    border-radius: ${RFValue(10)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DeliveredInformations = styled.View``;

export const Row = styled.View`
    /* display: flex; */
    flex-direction: row;
`;

export const Label = styled.Text`
    margin-right: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const LabelSecondary = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
`;

export const ButtonEdit = styled.TouchableOpacity``;

export const IconEdit = styled(Feather)`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.selected};
`;

export const Footer = styled.View`
    width: 100%;
    padding: ${RFValue(8)}px ${RFValue(10)}px ${RFValue(0)}px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const RowFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: ${RFValue(5)}px ${RFValue(10)}px ${RFValue(15)}px;
`;

export const Number = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const Total = styled.Text`
    margin: 0 0 ${RFValue(15)}px; 
    margin-right: ${RFValue(15)}px;
    
    align-self: flex-end;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

