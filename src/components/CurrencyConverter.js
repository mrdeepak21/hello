import {InputBox} from './parts';
import './assets/css/CurrencyConverter.css'
import { useCallback, useEffect, useState } from 'react';

function CurrencyConverter() {

  const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`;

  fetch(URL).then(res=>res.json()).then(data=>setAllCurrencies(Object.entries(data)));

  const [allCurrencies,setAllCurrencies] = useState([]);
   const [amount,setAmount] = useState(0);
   const [convertedAmount,setConvertedAmount] = useState(0);
   const [from,setFrom] = useState('usd');
   const [to,setTo] = useState('inr');

   const newUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`;


    const swap = useCallback(()=>{
      const tempCur = to;
      setTo(from);
      setFrom(tempCur);
      const tempAmount = amount;
      setAmount(convertedAmount);
      setConvertedAmount(tempAmount);
      },[from,to,convertedAmount,setAmount,setConvertedAmount,setTo,setFrom,URL]);


      
    const convertCurrency = useEffect(()=>{
      fetch(newUrl).then(res=>res.json()).then(data=>setConvertedAmount(amount*Number(data[from][to])))
    },[to,from,amount,newUrl,setConvertedAmount,InputBox])


  return (
    <>
        <h1>Currency Converter</h1>
    <div className='container'>
        <form onSubmit={e=>e.preventDefault()}>
        <InputBox 
        amount = {amount}
        onAmountChange={setAmount} 
        label='from'
        currencies={allCurrencies}
        currency = {from}
        setCurrency = {setFrom}
        />
        <button onClick={swap} className='swap'>SWAP</button>
        <InputBox 
        amount={convertedAmount} 
        label='to' 
        currencies={allCurrencies}
        disabled
        currency = {to}
        setCurrency = {setTo}
        />
        <button type="submit" onClick={convertCurrency}>Convert from {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
    </div>
    </>
  )
}

export default CurrencyConverter

// api: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json