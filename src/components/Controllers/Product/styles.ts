import styled from 'styled-components/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: ${RFPercentage(25)}px;
    margin-right: ${RFValue(5)}px;
    margin-bottom: ${RFValue(15)}px;
`;

export const Header = styled.View`
    width: ${RFPercentage(20)}px;
    height: ${RFPercentage(20)}px;

    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const PriceProduct = styled.Text`
    position: absolute;
    top: ${RFValue(5)}px;
    right: ${RFValue(8)}px;

    border-radius: ${RFValue(8)}px; 
    padding: ${RFValue(5)}px ${RFValue(8)}px;

    background-color: ${({ theme }) => theme.colors.price};
    color: ${({ theme }) => theme.colors.background};

    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.described};
`;

export const PhotoProduct = styled.Image`
    width: 100%;
    height: auto;
`;

export const Footer = styled.View`
    width: ${RFPercentage(20)}px;

    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
`;

export const ButtonLike = styled.TouchableOpacity`
    position: absolute;
    bottom: ${RFValue(-2)}px;
    right: ${RFValue(5)}px;
`;

export const LikeAlt = styled(FontAwesome)`
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.like};
`;

export const Like = styled(Feather)`
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
