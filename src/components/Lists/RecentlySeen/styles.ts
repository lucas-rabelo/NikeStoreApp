import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { ProductListProps } from '.';

export const Container = styled(
    FlatList as new (props: FlatListProps<ProductListProps>) => FlatList<ProductListProps>
).attrs({
    numColumns: 2,
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: getBottomSpace() }
})`
    margin-top: ${RFValue(15)}px;
    margin-horizontal: ${RFValue(25)}px;
    height: ${RFPercentage(70)}px;
`;