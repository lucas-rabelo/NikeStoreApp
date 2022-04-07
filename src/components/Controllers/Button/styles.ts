import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps {
    type: "dark" | "light";
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    padding: ${RFValue(18)}px;
    border-radius: ${RFValue(12)}px;

    margin-bottom: ${RFValue(20)}px;

    background-color: ${({ theme, type }) =>
        type === 'light' ? theme.colors.background : theme.colors.secondary}};
`;

export const Title = styled.Text<ButtonProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.title};

    text-align: center;
    
    color: ${({ theme, type }) =>
        type === 'light' ? theme.colors.primary : theme.colors.background}};
`;
