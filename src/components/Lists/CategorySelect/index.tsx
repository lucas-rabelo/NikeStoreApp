import React from 'react';

// components
import { Category } from '../../Controllers/Category';

// styles
import { Container } from './styles';

// utils
import { categories } from '../../../utils/categories';

interface Props {
    categorySelected: string;
    setCategory: (CategoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
    return (
        <Container>
            {categories.map(categorie => (
                <Category
                    key={categorie.id}
                    icon={categorie.icon}
                    label={categorie.label}
                    checked={categorie.id === categorySelected}
                    onPress={() => setCategory(categorie.id)}
                />
            ))}
        </Container>
    );
}