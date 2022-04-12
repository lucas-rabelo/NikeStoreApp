import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;

    margin-top: ${RFPercentage(10)}px;
    margin-bottom: ${RFPercentage(10)}px;
`;

export const Photo = styled.Image`
    width: 100%;
    height: ${RFValue(135)}px;
`;