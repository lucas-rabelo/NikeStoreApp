import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    margin-top: ${RFPercentage(15)}px;
`;

export const Content = styled.View``;

export const ButtonArea = styled.View`
    margin-top: ${RFValue(24)}px;
`;

export const ForgotArea = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
    width: 100%;
    margin-top: ${RFValue(-15)}px;
    padding: ${RFValue(15)}px ${RFValue(50)}px;
`;

export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.subtitle}
    opacity: .5;
    text-decoration: underline;
`;
