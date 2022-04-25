import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
    Container,
    Content,
    ProductArea,
    Photo,
    Description,
    ProductName,
    DeliveredTime,
    Divider,
    Footer,
    Quantity,
    Price,
} from './styles';
import theme from '../../../global/styles/theme';

export interface CartProductProps extends RectButtonProps {
    data: {
        id?: string;
        name: string;
        photo: number;
        deliveredTime: string;
        quantity: number;
        price: number;
    }
    handleRemove?: () => void;
    handleFavorite?: () => void;
}

export function CartProduct({ data, handleRemove, handleFavorite, ...rest }: CartProductProps) {

    const { background } = theme.colors;

    return(
        <Swipeable 
            overshootRight={false}
            overshootLeft={false}
            renderLeftActions={() => (
                <Animated.View>
                    <View>
                        <RectButton style={styles.buttonFavorite} onPress={handleFavorite}>
                            <Feather name="heart" size={32} color={background} />
                            <Text style={styles.label}>Favorite</Text>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton style={styles.buttonRemove} onPress={handleRemove}>
                            <Feather name="trash" size={32} color={background} />
                            <Text style={styles.label}>Delete</Text>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <Container>
                <Content>
                    <ProductArea>
                        <Photo source={data.photo}/>
                        <Description>
                            <ProductName>{data.name}</ProductName>
                            <DeliveredTime>Receive: {data.deliveredTime}</DeliveredTime>
                        </Description>
                    </ProductArea>
                    
                    <Divider />

                    <Footer>
                        <Quantity>Amount: {data.quantity}</Quantity>
                        <Price>Price: $ {data.price}</Price>
                    </Footer>
                </Content>
            </Container>

        </ Swipeable>
    );
}

export const styles = StyleSheet.create({
    buttonRemove: {
        width: 120,
        height: 142,
        backgroundColor: theme.colors.like,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingLeft: 15,
    },
    buttonFavorite: {
        width: 120,
        height: 142,
        backgroundColor: theme.colors.secondary,
        opacity: .5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 15,
    },
    label: {
        marginTop: 10,
        fontFamily: theme.fonts.subtitle,
        fontSize: 14,
        color: theme.colors.background
    }
})