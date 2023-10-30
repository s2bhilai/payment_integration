import Image from 'next/image'
import React from 'react'
import studioBag from '../../../../assets/studio-bag.png'
import './main-section.styles.scss';

export default function MainSection() {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-image'>
          <Image src={studioBag} alt='studio bag' height={400} />
        </div>
        <div className='ms-m-description'>
          <h2>
            Designed for fashion. Crafted for sport.
          </h2>
          <p>
            sdfasdfsadf sadfasdfsd asdfasdf
          </p>
          <button className='button is-black' id='shop-now'>
              STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  )
}
