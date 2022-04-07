import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { ProductListProps } from '.';

export const Container = styled(
    FlatList as new (props: FlatListProps<ProductListProps>) => FlatList<ProductListProps>
).attrs({
    showsHorizontalScrollIndicator: false,
    numColumns: 2,
    contentContainerStyle: { paddingBottom: getBottomSpace() }
})`
    margin-horizontal: ${RFValue(25)}px;
    margin-top: ${RFValue(25)}px;
`;