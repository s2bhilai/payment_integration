import React from 'react'
import MasterLayout from './shared/master-layout'
import Hero from './hero/page'
import MainSection from './main-section/page'
import FeaturedCollection from './featured-collection/page'

export default function HomePage() {
  return (
    <>
      <MasterLayout>
        <Hero />
        <MainSection />
        <FeaturedCollection />  
      </MasterLayout>  
    </>
  )
}
