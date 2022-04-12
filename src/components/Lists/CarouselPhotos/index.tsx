import React from 'react';
import { Text } from 'react-native';

import {
    Container,
    Photo
} from './styles';

interface Props {
    photo: number;
}

export function CarouselPhotos({ photo }: Props) {
    return(
        <Container>
            <Photo 
                resizeMode="contain"
                source={photo}
            />
        </Container>
    );
}