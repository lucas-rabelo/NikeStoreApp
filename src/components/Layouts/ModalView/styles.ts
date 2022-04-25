import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.overlay};
`;

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
`;

export const CloseButton = styled.TouchableOpacity``;

export const IconClose = styled(Feather)`
    align-self: flex-end;
    font-size: ${RFValue(28)}px;
    margin-top: ${RFValue(15)}px;
    margin-right: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;
