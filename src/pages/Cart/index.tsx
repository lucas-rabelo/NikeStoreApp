import React from 'react';
import { View } from 'react-native';

// components
import { Button } from '../../components/Controllers/Button';
import { CartProducts } from '../../components/Lists/CartProducts';

import {
    Container,
    Header,
    DeliveredInformations,
    Row,
    Label,
    LabelSecondary,
    IconEdit,
    ButtonEdit,
    Footer,
    RowFooter,
    Number,
    Total,
} from './styles';

export function Cart() {
    return (
        <Container>
            <Header>
                <DeliveredInformations>
                    <Row>
                        <Label>Where?</Label>
                        <LabelSecondary>99999-999</LabelSecondary>
                    </Row>
                    <Row>
                        <Label>When?</Label>
                        <LabelSecondary>April 4th to April 15th</LabelSecondary>
                    </Row>
                </DeliveredInformations>
                <ButtonEdit>
                    <IconEdit name="edit" />
                </ButtonEdit>
            </Header>
            
            <CartProducts />

            <Footer>
                <RowFooter>
                    <Total>Total</Total>
                    <Number>149.99</Number>
                </RowFooter>
                <Button 
                    label='Continue'
                    type="dark"
                />
            </Footer>
        </Container>
    );
}