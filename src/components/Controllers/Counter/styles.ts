import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    height: ${RFValue(56)}px;
    align-items: center;

    border-radius: ${RFValue(15)}px;

    padding: ${RFValue(2)}px;   
    background-color: ${({ theme }) => theme.colors.shape};
`;

const Icons = css`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.background};
`;

export const PlusButton = styled.TouchableOpacity`
    border-radius: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0 ${RFValue(15)}px;
`;

export const PlusIcon = styled(Feather)`
    ${Icons};
    padding: ${RFValue(5)}px;
`;

export const Count = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: .5;
`;

export const LessButton = styled.TouchableOpacity`
    border-radius: ${RFValue(100)}px;
    padding: ${RFValue(15)}px ${RFValue(11)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0 ${RFValue(15)}px;
`;

export const LessIcon = styled.View`
    width: ${RFValue(10)}px;
    height: ${RFValue(2)}px;

    background-color: ${({ theme }) => theme.colors.background};
`;
