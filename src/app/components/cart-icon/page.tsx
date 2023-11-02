'use client'

import React, { useContext } from 'react'
import shoppingBag from '../../../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import Image from 'next/image';
import { Cart, CartContext, CartContextType } from '@/app/context/cart-context';
import { useRouter } from 'next/navigation';

export default function CartIcon() {
  const router = useRouter();
  const { state } = useContext(CartContext) as CartContextType;
  console.log('cartItems: ', state.cartItems);
  
  return (
    <div className='cart-container' onClick={() => router.push(`components/pages/cart-page`) }>
        <Image src={shoppingBag} alt='shopping-cart-icon' height={40} />
        {
          state.itemCount > 0 ? (<span className='cart-count'> {state.itemCount} </span>)
            : null
        }
    </div>
  )
}
