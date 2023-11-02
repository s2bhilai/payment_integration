
'use client'

import React,{ useContext } from 'react'
import './cart-page.styles.scss'
import { CartContext, CartContextType } from '@/app/context/cart-context'
import MasterLayout from '../../shared/master-layout';
import CartItem from './cart-item';
import Total from './total';

export default function CartPage() {
  const { state,increase,decrease,removeProduct,clearCart } = useContext(CartContext) as CartContextType;
  return (
    <MasterLayout>
      <>
        <h1>Cart</h1>
        {
          state.cartItems.length === 0 ? (<div className='empty-cart'>Your cart is empty</div>)
          : 
          <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {
                  state.cartItems.map(item => 
                     <CartItem product={item} key={item.id} increase={increase} 
                        decrease={decrease} removeProduct={removeProduct}  />)
                }
              </div>
            </div>
            <Total itemCount={state.itemCount} total={state.total} clearCart={clearCart} />
          </>
        }
      </>
    </MasterLayout>
  )
}
