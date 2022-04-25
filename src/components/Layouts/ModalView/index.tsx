import { Feather } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { StyleSheet, View, Modal, ModalProps, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native';

// styles
import { 
    Container,
    Content,
    CloseButton,
    IconClose
} from './styles';

interface Props extends ModalProps {
    children: ReactNode;
    closeModal: () => void;
    margin?: number;
}

export function ModalView({ children, margin = 150, closeModal, ...rest }: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            {/* <TouchableWithoutFeedback > */}
            <Container>
                <View style={{ marginTop: margin }}>
                    <Content>
                        <CloseButton onPress={closeModal}>
                            <IconClose name="x"/>
                        </CloseButton>
                        {/* <View style={styles.bar} /> */}
                        {children}
                    </Content>
                </View>
            </Container>
            {/* </TouchableWithoutFeedback> */}
        </Modal>
    );
}