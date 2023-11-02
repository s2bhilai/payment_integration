'use client'

import React, { createContext, useReducer, ReactNode } from 'react'
import CartReducer, { sumItems } from './cart-reducer';
import { Product } from '../types/product';


export interface CartContextType {
    state: Cart;
    addProduct: (product: Product) => void;
    increase: (product: Product) => void;
    decrease: (product: Product) => void;
    removeProduct: (product: Product) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const cartFromStorage: Product[] = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')!) : [];

export type Cart = {
    cartItems: Product[];
    itemCount: number;
    total: number;
}

const initialState: Cart = {
    cartItems: cartFromStorage,
    ...sumItems(cartFromStorage)
}

export default function CartContextProvider({children}: { children: ReactNode }) {
    const [state,dispatch] = useReducer(CartReducer,initialState);

    const addProduct = (product : Product) => dispatch({type: 'ADD_ITEM', payload: product });
    const increase = (product: Product) => dispatch({ type: 'INCREASE', payload: product });
    const decrease = (product: Product) => dispatch({ type: 'DECREASE', payload: product });
    const removeProduct = (product: Product) => dispatch({ type: 'REMOVE_ITEM', payload: product });
    const clearCart = () => dispatch({ type: 'CLEAR' });

    return (
        <CartContext.Provider value={{ state,addProduct,increase,decrease,removeProduct, clearCart }}>
            { children }
        </CartContext.Provider>
    );
  
}
