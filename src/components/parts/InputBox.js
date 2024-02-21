import { useId } from "react"
import '../assets/css/InputBox.css'

function InputBox({
    label = '',
    disabled = false,
    amount = 0,
    onAmountChange,
    currencies = [],
    setCurrency,
    currency
}) {
    const id = useId();
    currencies = Object.keys(currencies);
    return (
        <div className="box">
            <div className="input-box">
                <label htmlFor={id}>{label}</label>
                <input type="number" onChange={e => onAmountChange(Number(e.target.value))} disabled={disabled} id={id} value={amount} step={0.1} min={0} />
            </div>

            <div className="input-box">
                <label htmlFor="">currency</label>
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    { currencies.map( item =>
                      item &&  <option value={item} key={item}>{item}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default InputBox