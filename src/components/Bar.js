import React, { useState } from 'react'
import './assets/css/Bar.css'

function Bar() {
const [bgColor, setBgColor] = useState('#282c34'); 
document.querySelector('body').style.backgroundColor=`${bgColor}`;
  return (
    <div className="section">
    <div className="bar_wrapper">
        <div className="bar">
            <button className="button" color="red" style={{backgroundColor: 'red'}} onClick={e=>setBgColor(e.target.getAttribute('color'))}>Red</button>
            <button className="button" style={{backgroundColor: 'green'}} color="green" onClick={e=>setBgColor(e.target.getAttribute('color'))}>Green</button>
            <button className="button" style={{backgroundColor: 'blue'}} color="blue" onClick={e=>setBgColor(e.target.getAttribute('color'))}>Blue</button>
            <button className="button" style={{backgroundColor: '#282c34'}} color="#282c34" onClick={e=>setBgColor(e.target.getAttribute('color'))}>Default</button>
            <button className="button" color="yellow" onClick={e=>setBgColor(e.target.getAttribute('color'))} style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button className="button" style={{backgroundColor: 'orange'}} color="orange" onClick={e=>setBgColor(e.target.getAttribute('color'))}>Orange</button>
        </div>
    </div>
    </div>
  )
}

export default Bar