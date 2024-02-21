import { useEffect, useState } from "react";

export default function useCurrencyConverter(currency = 'usd') {

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    const [currencyInfo, setCurrencyInfo] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setCurrencyInfo(data[currency]));
    }, [currency]);

    return currencyInfo;
}