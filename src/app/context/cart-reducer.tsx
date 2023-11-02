import { Product } from "../types/product";
import { Cart } from "./cart-context";


const storeCartItems = (cartItems: Product[]) => {
    const cart = cartItems.length > 0 ? cartItems : [];
    localStorage.setItem('cart', JSON.stringify(cart));
}


export const sumItems = (cartItems: Product[]) => {
    storeCartItems(cartItems);
    return {
        itemCount: cartItems.reduce((total,product) => total + product.quantity!,0),
        total: cartItems.reduce((total,product) => total + (product.quantity! * product.price), 0)
    };
}

const CartReducer = (state: Cart,action: any): Cart => {
    switch(action.type) {
        case 'ADD_ITEM':
            if(!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'INCREASE':
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id); 
            state.cartItems[increaseIndex].quantity!++;    

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'DECREASE':
            const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            const product = state.cartItems[decreaseIndex];
            if(product.quantity! > 1) {
               product.quantity!--; 
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'REMOVE_ITEM':
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartItems: [...newCartItems],
                ...sumItems(newCartItems)
            }
        case 'CLEAR':
            localStorage.removeItem('cart');
            return {
                itemCount: 0,
                total: 0,
                cartItems: []
            }
        default:
            return state;
    }
}


export default CartReducer;