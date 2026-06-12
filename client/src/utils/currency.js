export const currencyRates = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.012 },
  EUR: { symbol: "€", rate: 0.011 },
  AED: { symbol: "د.إ", rate: 0.044 },
};

export function getCurrency() {
  return localStorage.getItem("currency") || "INR";
}

export function formatPrice(amountInINR) {
  const currency = getCurrency();
  const data = currencyRates[currency] || currencyRates.INR;

  return `${data.symbol}${Math.round(amountInINR * data.rate).toLocaleString()}`;
}