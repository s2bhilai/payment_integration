import React, { CSSProperties } from 'react'
import MasterLayout from './shared/master-layout'

export default function NotFound() {
  const style: CSSProperties = {
    fontWeight: 'bold',
    textAlign: 'center'
  }

  return (
    <MasterLayout>
      <p style={style}>Unfortunately, We can't find that page</p>
    </MasterLayout>
  )
}
