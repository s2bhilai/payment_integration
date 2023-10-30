'use client'

import { ContextType, ProductsContext } from '@/app/context/products-context'
import React, {useState, useContext} from 'react'
import FeaturedProduct from '../shared/page';

export default function FeaturedCollection() {
  const { products } = useContext(ProductsContext) as ContextType;
  const productItems = products.filter((product,i) => i < 4).map(product => (
    <FeaturedProduct product={product} key={product.id} />
  ))
  return (
    <div className='featured-collection container'>
      <h2 className='featured-section-title'>Featured Collection</h2>
      <div className='products'>
        {
          productItems
        }
      </div>
    </div>
  );
}
