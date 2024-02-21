import {InputBox} from './parts';
import './assets/css/CurrencyConverter.css'
import { useState } from 'react';
import useCurrencyConverter from './hooks/useCurrencyConverter';

function CurrencyConverter() {

  const [amount,setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const allCurrencies = useCurrencyConverter('usd');


    const swap = ()=> {
      setTo(from);
      setFrom(to);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
      };
      
    const convertCurrency = ()=>{
      setConvertedAmount(Number(amount) * Number(allCurrencies[to]));
    }
    
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
        amount={Number(convertedAmount)} 
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

export default CurrencyConverter;