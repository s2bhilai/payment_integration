import React, {ReactNode} from 'react'
import Header from '../header/page'
import Footer from '../footer/page'

export default function MasterLayout({children}: 
    {children: ReactNode }) {
  return (
    <>
      <Header/>
        <main>
            { children }
        </main>
      <Footer />
    </>
  )
}
