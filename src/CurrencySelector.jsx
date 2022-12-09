import { useEffect, useState } from "react" 

const CurrencySelector = ({ currency, setCurrency }) => {
    let [currencies, setCurrencies] = useState([])
    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/supported-currencies.json`)
        .then(res => res.json())
        .then(data => setCurrencies(data))
        // .then(data => console.log(data))) when fetching always check the data first
    }, [])
    
    return (
        <select onChange={(evt) => setCurrency(evt.target.value)} value={currency}>
            {/* <option value="AUD">Australian Dollar</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="BRL">Brazilian Real</option> */}
            {currencies.map(cur => <option key={cur.currency} value={cur.currency}>{cur.currency} - {cur.country}</option> )}
        </select>
    )
}

export default CurrencySelector

