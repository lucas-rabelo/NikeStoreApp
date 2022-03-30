import React, { useEffect } from 'react';

// components
import { Category, CategoryProps } from '../Category';

// styles
import { Container } from './styles';

// utils
import categories from '../../../utils/categories';

export interface CategoryListProps extends CategoryProps {
    id: string;
    checked?: boolean;
}

interface Props {
    setCategory: (CategoryId: string) => void;
}

export function CategorySelect({ setCategory }: Props) {


    function handleSelectCategory(id: string) {
        setCategory(id);
    }

    useEffect(() => {
        alert(JSON.stringify(categories));
    }, []);

    return (
        <Container>
            {categories.map(categorie => {
                <Category
                    icon={categorie.icon}
                    label={categorie.label}
                    checked={categorie.checked}
                    onPress={() => handleSelectCategory(categorie.id)}
                />
            })

            }
        </Container>
    );
}