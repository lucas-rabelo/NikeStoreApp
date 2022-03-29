import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: ${RFValue(10)}px ${RFValue(12)}px;
    margin: 0 ${RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${RFValue(8)}px;
`;

export const IconSearch = styled(Feather)`
    font-size: ${RFValue(24)}px

    color: ${({ theme }) => theme.colors.primary};
`;

export const InputText = styled.View`
    
`;
