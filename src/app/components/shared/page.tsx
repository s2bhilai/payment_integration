import React, { useContext } from 'react'
import './featured-product.styles.scss'
import { Product } from '@/app/types/product'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CartContext, CartContextType } from '@/app/context/cart-context'
import { isInCart } from '@/app/helpers'

type Props = {
  product: Product
}

//For resolving image urls
const loaderProp = ({src}: any) => {
  return src;
}

export default function FeaturedProduct({ product }: Props) {
  const router = useRouter();
  const { title,imageUrl, price,id,description } = product;
  const { state, addProduct,increase } = useContext(CartContext) as CartContextType;
  const itemInCart = isInCart(product!,state.cartItems);
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => router.push(`components/single-product?id=${id}`) }>
        <Image src={imageUrl} alt='product' width={100} height={300} 
           loader={loaderProp} unoptimized />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        {
          !itemInCart && (
            <button className='button is-black nomad-btn' 
               onClick={() => { addProduct(product) }}
            >
              ADD TO CART
            </button> 
          )
        }
        {
          itemInCart && (
            <button className='button is-white nomad-btn' id='btn-white-outline'
               onClick={() => increase(product) }
            >
              ADD MORE
            </button> 
          )
        }
        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </div>
  )
}
