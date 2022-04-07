import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    Header,
    NameCard,
    FlagCard,
    Footer,
    FullValue,
    NumberCard,
} from './styles';

const Flags = {
    visa: 'cc-visa',
    master: 'cc-mastercard',
    paypal: 'cc-paypal',
    american: 'cc-amex',
    diner: 'cc-dinner',
    discover: 'cc-discover'
}

interface Props {
    flag: "visa" | "master" | "paypal" | "american" | "diner" | "discover";
    full_value?: number;
    number?: number;
}

export function Card({ flag, full_value, number }: Props) {
    return(
        <Container>
            <Header>
                <NameCard>Balance</NameCard>
                <FlagCard
                    name={Flags[flag]}
                />
            </Header>
            <Footer>
                <FullValue>$280.65</FullValue>
                <NumberCard>...3028</NumberCard>
            </Footer>
        </Container>
    );
}