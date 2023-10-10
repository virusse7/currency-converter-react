import { useState, useEffect } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_IjB7qjBqKggwBVYBNVY37A77UBFWz8eWX0pjDU0s");
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