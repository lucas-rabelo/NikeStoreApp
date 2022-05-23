import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


// components
import { Product, ProductProps } from '../../Controllers/Product';

// hook
import { useAuth } from '../../../hooks/auth';

import {
    Container
} from './styles';

export interface ProductListProps extends ProductProps {
    id: string;
    description: string;
    category: string;
}

interface Props {
    productSelected: string;
    categorySelected?: string;
    setProduct: (productId: string) => void;
    search?: string;
}

export function RecentlySeen({ search, categorySelected, productSelected, setProduct }: Props) {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ProductListProps[]>([]);

    const { getProducts, products } = useAuth();

    useEffect(() => {
        (async () => {
            if (categorySelected && search) {
                await getProducts(categorySelected, search);
                return;
            }

            if (categorySelected && search === '') {
                await getProducts(categorySelected);
                return;
            }

            if (!categorySelected && search) {
                await getProducts(null, search);
                return;
            }
        })()
    }, [search]);

    function handleFavoriteProduct(productId: string) {
        setProduct(productId);

        data.find((product) => {
            if (product.id === productId) {
                return product.liked = !product.liked;
            }
        });
    }

    // useEffect(() => {
    //     if (search == '') {
    //         setData(products);
    //     } else {
    //         setData(
    //             products.filter(product => {
    //                 if (product.name.indexOf(search) > -1) {
    //                     return true;
    //                 } else {
    //                     return false;
    //                 }
    //             })
    //         )
    //     }


    //     if (categorySelected) {
    //         if (categorySelected == '') {
    //             setData(products);
    //         } else {
    //             setData(
    //                 products.filter(product => {
    //                     if (product.category.indexOf(categorySelected) > -1) {
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //                 })
    //             )
    //         }
    //     }

    // }, [search, categorySelected]);

    if (isLoading) {
        return (
            <View style={{ marginTop: RFValue(200), alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={48} color="black" />
            </View>
        )
    }

    return (
        <Container
            data={data}

            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Product
                    id={item.id}
                    photo={item.photo}
                    price={item.price}
                    name={item.name}
                    liked={item.liked}
                    onPress={() => handleFavoriteProduct(item.id)}
                />
            )}
        />
    );
}