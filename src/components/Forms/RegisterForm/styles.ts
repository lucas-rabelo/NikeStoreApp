import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin-top: ${RFPercentage(5)}px;
`;

export const Content = styled.View`

`;

export const ButtonArea = styled.View`
    margin-top: ${RFValue(24)}px;
`;