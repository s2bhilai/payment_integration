import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className='nav-menu container'>
       <div className='logo'>
          <Link href='/'>
            Nomad
          </Link>
       </div>
       <ul>
          <li>
            <Link href='/'>
                Home
            </Link>
          </li>
          <li>
            <Link href='/shop'>
                Shop
            </Link>
          </li>
       </ul>
    </nav>
  )
}
