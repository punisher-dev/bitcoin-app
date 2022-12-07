import React from 'react'
import { useState } from 'react'

const BitcoinIndex = () => {
    let [price, setPrice] = useState(0)

  return (
    <>
        <h1>Bitcoin Index</h1>
        <p>Current Price: AUD {price}</p>
    </>
  )
}

export default BitcoinIndex