import React from 'react';

// components
import { Button } from '../../components/Controllers/Button';

// styles
import {
    Container,
    Header,
    ProfileInformations,
    ProfilePhoto,
    ProfileName,
    Content,
    Options,
    Option,
    Label,
    Icon,
    Footer,
} from './styles';

const OPTIONS = [
    { id: '1', icon: 'heart', label: 'Favorites' },
    { id: '2', icon: 'shopping-bag', label: 'My shopping' },
    { id: '3', icon: 'settings', label: 'Configurations' },
    { id: '4', icon: 'help-circle', label: 'About' }
]

export function Profile() {
    return (
        <Container>
            <Header>
                <ProfileInformations>
                    <ProfilePhoto source={{ uri: 'https://www.github.com/lucas-rabelo.png' }} />
                    <ProfileName>Lucas Rabelo</ProfileName>
                </ProfileInformations>
            </Header>
            <Content>
                <Options>
                    {OPTIONS.map(option => (
                        <Option 
                            key={option.id}
                            onPress={() => {}}
                            activeOpacity={.8}
                        >
                            <Icon name={option.icon} />
                            <Label>{option.label}</Label>
                        </Option>
                    ))}
                </Options>
            </Content>
            <Footer>
                <Button 
                    type="dark"
                    label="Log-out"
                    activeOpacity={.8}
                    onPress={() => {}}
                />
            </Footer>
        </Container>
    );
}