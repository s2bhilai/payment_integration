'use client'

import React, { useContext,useState,useEffect } from 'react'
import './single-product.styles.scss'
import { ContextType, ProductsContext } from '@/app/context/products-context'
import { usePathname,useRouter,useSearchParams } from 'next/navigation'
import { Product } from '@/app/types/product'
import MasterLayout from '../shared/master-layout'
import Image from 'next/image'
import { CartContext, CartContextType } from '@/app/context/cart-context'
import { isInCart } from '@/app/helpers'

export default function SingleProduct() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  const { products } = useContext(ProductsContext) as ContextType;
  const { state, addProduct,increase } = useContext(CartContext) as CartContextType;
  const [product,setProduct] = useState<Product | undefined>(undefined);
  const id = searchParams.get('id');

  useEffect(() => {
    const product: Product | undefined = products.find(item => Number(item.id) === Number(id));

    if(!product) {
      router.push(`/components/pages/shop`);
    }

    setProduct(product);
  },[product,id,router,products]);

  if(!product) return <div>No products available</div>;

  const itemInCart = isInCart(product, state.cartItems);

  //For resolving image urls
  const loaderProp = ({src}: any) => {
    return src;
  }

  return (
    <MasterLayout>
      <div className='single-product-container'>
        <div className='product-image'>
          <Image src={product!.imageUrl} alt='product' height={400} loader={loaderProp} width={400} />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{product?.title}</h3>
            <p>{product?.price}</p>
          </div>
          <div className='add-to-cart-btns'>
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

            <button className='button is-black nomad-btn' id='btn-white-outline'>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className='product-description'>
            <p>
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </MasterLayout>
  )
}
