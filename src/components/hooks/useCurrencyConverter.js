import {useState } from "react"

const useCurrencyConverter = (currency)=> {
    const [data,setData] = useState({});
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then(res=> res.json())
.then(res=>setData(res.currency));
return useCurrencyConverter;
};

export default useCurrencyConverter;