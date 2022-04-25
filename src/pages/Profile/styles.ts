import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;

    margin-top: ${getStatusBarHeight() + RFValue(15)}px;
`;

export const Header = styled.View``;

export const ProfileInformations = styled.View`    
    height: ${RFPercentage(20)}px;
    padding: ${RFValue(15)}px 0;

    align-items: center;
    justify-content: space-between;
`;

export const ProfilePhoto = styled.Image`
    width: ${RFPercentage(10)}px;
    height: ${RFPercentage(10)}px;

    border-radius: ${RFValue(20)}px;
    
    border-color: ${({ theme }) => theme.colors.secondary};
    border-width: ${RFValue(2)}px;
`;

export const ProfileName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(14)}px;
`;

export const Content = styled.View`
    height: ${RFPercentage(62)}px;
    justify-content: flex-start;
`;

export const Options = styled.ScrollView.attrs({
    showVerticalScrollIndicator: false,
})`
    padding: 0 ${RFValue(25)}px;
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    padding: ${RFValue(10)}px ${RFValue(15)}px;

    background-color: ${({ theme }) => theme.colors.overlay};

    margin-bottom: ${RFValue(10)}px;
`;

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.background};
    margin-right: ${RFValue(15)}px;
`;


export const Footer = styled.View`
    margin: 0 ${RFValue(25)}px;
`;
