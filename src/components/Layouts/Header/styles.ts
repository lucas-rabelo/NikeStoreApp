import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 0 ${RFValue(18)}px ${RFValue(10)}px;
`;

export const AreaLabel = styled.View``;

export const Greeting = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const GreetingSecondary = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.described};
`;

export const LogoutButton = styled.TouchableOpacity`
    padding: ${RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    border-radius: ${RFValue(6)}px;
`;

export const LogoutIcon = styled(Entypo)`
    font-size: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.background};
`;

