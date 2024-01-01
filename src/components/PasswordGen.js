import React, { useCallback, useEffect, useRef, useState } from 'react'
import './assets/css/PasswordGen.css';

function PasswordGen() {

  const [number,setNumber] = useState(false);
  const [spChar,setSpChar] = useState(false);
  const [length,setLength] = useState(8);
  const [password,setPassword] = useState('');
  const [btnText,setBtnText] = useState('Copy');
  const passwordref = useRef(null);

  // Password Generator
const generatePassword = useCallback(()=>{
  let myPassword = '';
  const num = '0123456789';
  const spacial ='!@#$%&*?/|{}[])(';
  let string = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ${number?num:''}${spChar?spacial:''}`;

  for (let index = 1; index <= length; index++) {
    myPassword += string.charAt(Math.floor(Math.random()*string.length+1)); 
  }

setPassword(myPassword);

},[number,spChar,length,setPassword]);

//Copy to clipboard
const copyPassword = useCallback(()=>{
  setBtnText('Copied');
  passwordref.current?.select();
  window.navigator.clipboard.writeText(password);
  setTimeout(()=>{setBtnText('Copy')},2000);
},[password,btnText,setBtnText]);

//on change anything call the password generator
useEffect(()=>{generatePassword()},[length,number,spChar,generatePassword,])

  return (
    <div className='section'>
    <div className='container'>
      <div className="wrapper">

      <input type="text" readOnly value={password} ref={passwordref}/>
      <button onClick={()=>{copyPassword()}}>{btnText}</button>
      </div>
      <div className="wrapper">
        <input type="range" id='range' min={4} max={30} onChange={(e)=>setLength(e.target.value)}/>
        <label htmlFor="range">Length({length})</label>
        <input type="checkbox" id='number' checked={number} onChange={(e)=>setNumber((prev)=>!prev)}/>
        <label htmlFor="number">Number</label>
        <input type="checkbox" id='sp-char' checked={spChar} onChange={(e)=>setSpChar((prev)=>!prev)}/>
        <label htmlFor="sp-char">Special Character</label>
      </div>
    </div>
    </div>
  )
}

export default PasswordGen