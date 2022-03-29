import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(15)}px;
    margin-bottom: ${getBottomSpace() + RFValue(15)}px;
`;