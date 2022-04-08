import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View``;

export const Informations = styled.View`
    height: 50%;
    padding: ${RFValue(30)}px ${RFValue(20)}px 0;
    border-top-left-radius: ${RFValue(30)}px;
    border-top-right-radius: ${RFValue(30)}px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: ${RFValue(15)}px;
`;

export const Title = styled.Text`
    width: 75%;
    font-size:  ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const Price = styled.Text`
    border-radius: ${RFValue(15)}px; 
    padding: ${RFValue(12)}px ${RFValue(20)}px;

    background-color: ${({ theme }) => theme.colors.price};
    color: ${({ theme }) => theme.colors.background};

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.subtitle};
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.described};
`;

export const Divider = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;

    background-color: ${({ theme }) => theme.colors.secondary};

    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
    opacity: .4;
`;

export const Footer = styled.View.attrs({
    // style: {
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 11,
    //     },
    //     shadowOpacity: 0.55,
    //     shadowRadius: 14.78,
    //     elevation: 22,
    // }
})`
    position: absolute;
    bottom: 0;

    flex-direction: row;
    justify-content: space-between;
    
    width: 100%;
    height: ${RFValue(100)}px;

    padding: ${RFValue(25)}px ${RFValue(15)}px 0;

    border-top-right-radius: ${RFValue(20)}px;
    border-top-left-radius: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.transparent};
`;
