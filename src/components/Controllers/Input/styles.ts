import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
    isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: ${RFValue(56)}px;
  width: ${RFValue(55)}px;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(2)}px;
  background-color: ${({ theme }) => theme.colors.background};
  
  ${({ isFocused }) => isFocused && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.colors.primary};   
  `};
`;


export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0 ${RFValue(23)}px;
  ${({ isFocused }) => isFocused && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.colors.primary};   
  `};
`;