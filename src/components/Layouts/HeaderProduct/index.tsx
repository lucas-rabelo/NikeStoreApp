import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
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
    return(
        <Container>
            <BackIcon name="arrow-left" />
            <Title>Product Detail</Title>
            <ButtonLike
                {...rest}
            >
                { isLiked ? <LikeAltIcon name="heart" /> : <LikeIcon name="heart" /> }
            </ButtonLike>
        </Container>
    );
}