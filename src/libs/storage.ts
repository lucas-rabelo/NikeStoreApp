import { products } from '../utils/products';

import { DetailsProps } from '../pages/ProductDetail'

export function openProduct(productId: string) {
    const productSelected = products.find(product => product.id === productId);

    const data = {
        id: productSelected.id,
        price: productSelected.price,
        photo: productSelected.photo,
        name: productSelected.name,
        description: productSelected.description,
        category: productSelected.category,
        liked: productSelected.liked
    }

    return data;
}