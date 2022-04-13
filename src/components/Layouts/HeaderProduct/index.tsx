import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProps } from '../../../routes/stack.routes';

import {
    Container,
    BackButton,
    BackIcon,
    Title,
    ButtonLike,
    LikeIcon,
    LikeAltIcon,
} from './styles';

interface Props extends TouchableOpacityProps {
    isLiked?: boolean;
}

export function HeaderProduct({ isLiked = false, ...rest }: Props) {

    const navigation = useNavigation<NavigationScreenProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <BackButton
                onPress={handleGoBack}
            >
                <BackIcon name="arrow-left" />
            </BackButton>
            <Title>Product Detail</Title>
            <ButtonLike
                {...rest}
            >
                {isLiked ? <LikeAltIcon name="heart" /> : <LikeIcon name="heart" />}
            </ButtonLike>
        </Container>
    );
}