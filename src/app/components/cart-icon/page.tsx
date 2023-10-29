import React from 'react'
import shoppingBag from '../../../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import Image from 'next/image';

export default function CartIcon() {
  return (
    <div className='cart-container'>
        <Image src={shoppingBag} alt='shopping-cart-icon' height={40} />
        <span className='cart-count'>5</span>
    </div>
  )
}
