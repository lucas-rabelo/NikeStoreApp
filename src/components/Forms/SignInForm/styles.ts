import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

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

export const ForgotButton = styled.TouchableOpacity``;

export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.subtitle}
    opacity: .5;
    text-decoration: underline;
`;

export const OtherSignInArea = styled.View`
    flex-direction: row;
    margin: ${RFValue(25)}px ${RFValue(70)}px;

    justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity`
    padding: ${RFValue(10)}px;
    border-radius: ${RFPercentage(10)}px;

    border: .5px solid ${({ theme }) => theme.colors.primary};

    background-color: ${({ theme }) => theme.colors.background};
`;

export const GoogleIcon = styled(AntDesign)`
    font-size: ${RFValue(28)}px;
`;

export const FacebookIcon = styled(AntDesign)`
    font-size: ${RFValue(28)}px;
`;
