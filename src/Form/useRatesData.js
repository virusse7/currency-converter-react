import { useState, useEffect } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=11d340c5b25a8663d400e94bb7835e8c");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        }
        setTimeout(fetchRates, 2000);
    }, []);

    return ratesData;
};