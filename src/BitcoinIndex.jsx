import { useEffect, useState } from 'react'

const BitcoinIndex = () => {
    let [price, setPrice] = useState(0)


    // Mount and Update
    useEffect(() => {
        console.log('useEffect triggered')
    })

    // Mount only
    useEffect(() => {
        console.log('useEffect on mount'), []
    })

    // Mount and price update only
    useEffect(() => {
        console.log('useEffect on price update'), [price]
    })

    fetch('http://api.coindesk.com/v1/bpi/currentprice/AUD.json')
        .then(res => res.json())
        .then(data => setPrice(data.bpi.AUD.rate_float))

  return (
    <>
        <h1>Bitcoin Index</h1>
        {price > 0 ? <h3>Current Price: AUD{price}</h3> : <h3>loading...</h3>}
    </>
  )
}

export default BitcoinIndex