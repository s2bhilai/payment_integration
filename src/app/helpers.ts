import { Product } from "./types/product";

export const isInCart = (product: Product,cartItems: Product[]) => {
    return cartItems.find(item => item.id === product.id);
}