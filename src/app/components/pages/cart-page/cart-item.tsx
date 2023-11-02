import { Product } from '@/app/types/product'
import Image from 'next/image';
import React from 'react'
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from '../../icons/page';
import './cart-page.styles.scss'

type Props = {
  product: Product
  increase: (product: Product) => void;
  decrease: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

//For resolving image urls
const loaderProp = ({src}: any) => {
  return src;
}

export default function CartItem({ product,increase,decrease,removeProduct }: Props) {
  const { title,imageUrl,price,quantity } = product;
  return (
    <div className='cart-item'>
      <div className='item-image'>
        <Image src={imageUrl} alt='product' height={100} width={100} loader={loaderProp} />
      </div>
      <div className='name-price'>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div className='quantity'>
        <p>{ `Quantity: ${quantity}` }</p>
      </div>
      <div className='btns-container'>
        <button className='btn-increase' onClick={() => increase(product) }>
          <PlusCircleIcon width='20px' />
        </button>
        {
          quantity === 1 && 
            <button className='btn-trash' onClick={() => removeProduct(product)  }>
                <TrashIcon width='20px' />
            </button>
        }
        {
          quantity! > 1 && 
            <button className='btn-decrease' onClick={() => decrease(product) }>
              <MinusCircleIcon width='20px' />
            </button>
        }
      </div>
    </div>
  )
}
