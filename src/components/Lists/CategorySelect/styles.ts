import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        marginTop: RFValue(15),
        paddingHorizontal: RFValue(19),
    }
})`
  
`;
