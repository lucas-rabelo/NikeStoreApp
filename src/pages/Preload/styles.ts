import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight() + RFValue(20)}px;
    margin-bottom: ${getBottomSpace() + RFValue(30)}px;
`;

export const TitleArea = styled.View`
    width: 100%;
    padding: 0 ${RFValue(25)}px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.background}
`;

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.background}
    opacity: .5;
`;

export const ImageContent = styled.Image.attrs({
    resizeMode: "cover"
})`
    width: ${RFPercentage(60)}px;
    height: ${RFPercentage(30)}px;
`;

export const Footer = styled.View`
    width: 100%;
    padding: 0 ${RFValue(25)}px;
`;
