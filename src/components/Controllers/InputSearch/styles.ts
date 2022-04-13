import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface InputProps {
    hasFilter?: boolean;
    isFocused?: boolean;
}

export const Container = styled.View<InputProps>`
    flex-direction: row;

    padding: ${RFValue(10)}px ${RFValue(15)}px;

    margin-horizontal: ${({ isFocused }) =>
        isFocused ? 0 : 18}px;
        
    margin-bottom: 0;

    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${RFValue(8)}px;
`;

const IconsCss = css`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconSearch = styled(Feather)`
    ${IconsCss}
    margin-right: ${RFValue(12)}px;
`;

export const InputText = styled.TextInput<InputProps>`
    width: ${({ hasFilter }) =>
        hasFilter ? RFPercentage(34) : RFPercentage(38)}px;
        
    font-size: ${RFValue(14)}px;
`;

export const ButtonFilter = styled.TouchableOpacity``;

export const IconFilter = styled(Feather)`
    ${IconsCss}
`;