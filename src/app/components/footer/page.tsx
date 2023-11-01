import React from 'react'
import './footer.styles.scss'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      { year } c NOMAD Store
    </div>
  )
}
