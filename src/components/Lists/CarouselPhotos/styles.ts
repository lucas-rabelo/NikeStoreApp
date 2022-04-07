import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(50)}px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.shape};
`;