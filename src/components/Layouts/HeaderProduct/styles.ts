import styled, { css } from "styled-components/native";
import { Feather, FontAwesome } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: ${getStatusBarHeight() + RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px ${RFValue(20)}px; 

    /* margin: ${getStatusBarHeight() + RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px; */
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.title}
`;

export const ButtonLike = styled.TouchableOpacity``;

export const BackButton = styled.TouchableOpacity``;

const Icons = css`
    font-size: ${RFValue(24)}px;
`;

export const BackIcon = styled(Feather)`
    ${Icons}
`;

export const LikeIcon = styled(Feather)`
    ${Icons}
    color: ${({ theme }) => theme.colors.primary};
`;

export const LikeAltIcon = styled(FontAwesome)`
    ${Icons}
    color: ${({ theme }) => theme.colors.like};
`;
