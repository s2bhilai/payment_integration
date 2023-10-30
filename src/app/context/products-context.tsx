
'use client'

import React, { createContext, useState, ReactNode } from 'react'
import SHOP_DATA  from '../shop/index'
import { Product } from '../types/product';

export interface ContextType {
    products: Product[]
}

export const ProductsContext = createContext<ContextType | undefined>(undefined);

export default function ProductsContextProvider({children}: {children: ReactNode}) {
  const [products] = useState<Product[]>(SHOP_DATA);
  return (
    <ProductsContext.Provider value={{ products }}>
        {children}
    </ProductsContext.Provider>
  );
}

