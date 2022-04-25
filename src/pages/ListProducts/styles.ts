import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;

    margin-top: ${getStatusBarHeight() + RFValue(15)}px;
`;

export const Title = styled.Text`
    
`;
