import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  itemCount: number;
  total: number;
  clearCart: () => void;
}

export default function Total({ itemCount,total,clearCart }: Props) {
  const router = useRouter();

  return (
    <div className='total-container'>
      <div className='total'>
        <p>Total Items: {itemCount}</p>
        <p>{ `Total: ${total}` }</p>
      </div>
      <div className='checkout'>
        <button className='button is-black' onClick={() => router.push(`/checkout`)}>
          CHECK OUT
        </button>
        <button className='button is-white' onClick={() => clearCart() }>
          CLEAR
        </button>
      </div>
    </div>
  )
}
