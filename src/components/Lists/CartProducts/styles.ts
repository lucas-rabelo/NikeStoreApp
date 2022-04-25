import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";

import { CartProductProps } from '../../Controllers/CartProduct';

export const Container = styled(
    FlatList as new (props: FlatListProps<CartProductProps>) => FlatList<CartProductProps>
).attrs({
    showsVerticalScrollIndicator: false
})`
    width: 100%;
    margin-top: ${RFValue(15)}px;
`;

