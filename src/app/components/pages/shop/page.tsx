
'use client'

import React, { useContext } from 'react'
import './shop.styles.scss'
import { ContextType, ProductsContext } from '@/app/context/products-context'
import FeaturedProduct from '../../shared/page';
import MasterLayout from '../../shared/master-layout';

export default function Shop() {
  const { products } = useContext(ProductsContext) as ContextType;
  const allProducts = products.map(product => ( 
    <FeaturedProduct product={product} key={product.id} /> 
  ));

  return (
    <MasterLayout>
      <div className='product-list-container'>
          <h2 className='product-list-title'>Shop</h2>
          <div className='product-list'>
            {
              allProducts
            }
          </div>
      </div>
    </MasterLayout>
  )
}
