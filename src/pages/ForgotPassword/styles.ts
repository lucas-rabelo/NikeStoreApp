import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.KeyboardAvoidingView`
    width: 100%;
    padding: 0 ${RFValue(25)}px;

    margin-top: ${getStatusBarHeight() + RFValue(15)}px}
    margin-bottom: ${getBottomSpace() + RFValue(15)}px}
`;

export const Title = styled.Text`
    width: ${RFPercentage(50)}px;
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(40)}px;

    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;