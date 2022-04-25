import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    
    padding: ${RFValue(10)}px ${RFValue(5)}px;

    margin-bottom: ${RFValue(10)}px;
    border-radius: ${RFValue(8)}px;
`;

export const Content = styled.View`
    padding: 0 ${RFValue(30)}px;
`;

export const ProductArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;
`;

export const Description = styled.View``;

export const ProductName = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: ${RFPercentage(30)}px;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.secondary};
    opacity: .7;
`;

export const DeliveredTime = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: ${RFPercentage(30)}px;

    margin-top: ${RFValue(3)}px;

    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.secondary};
    opacity: .7;
`;

export const Divider = styled.View`
    width: ${RFPercentage(40)}px;
    height: ${RFValue(1)}px;    

    margin: ${RFValue(5)}px ${RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: .3;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin: ${RFValue(5)}px ${RFValue(10)}px 0;
`;

export const Quantity = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Price = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.secondary};
`;
