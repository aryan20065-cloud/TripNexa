import { createContext, useContext, useEffect, useState } from "react";
import { getExchangeRates } from "../services/currencyService";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [rates, setRates] = useState({ INR: 1 });

  useEffect(() => {
    async function loadRates() {
      const liveRates = await getExchangeRates("INR");
      setRates(liveRates);
    }

    loadRates();
  }, []);

  const convertPrice = (priceInINR) => {
    const rate = rates[currency] || 1;
    return priceInINR * rate;
  };

  const formatPrice = (priceInINR) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(convertPrice(priceInINR));
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}