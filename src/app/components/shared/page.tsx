import React from 'react'
import './featured-product.styles.scss'
import { Product } from '@/app/types/product'
import Image from 'next/image'

type Props = {
  product: Product
}

export default function FeaturedProduct({ product }: Props) {
  const { title,imageUrl, price } = product;

  return (
    <div className='featured-product'>
      <div className='featured-image'>
        <Image src={imageUrl} alt='product' width={300} height={300} />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </div>
  )
}
