const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export async function getExchangeRates(base = "INR") {
  try {
    const response = await fetch(`${BASE_URL}/latest/${base}`);

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const data = await response.json();

    return data.conversion_rates;
  } catch (error) {
    console.error(error);

    return {
      INR: 1,
      USD: 0.012,
      EUR: 0.011,
      GBP: 0.0095,
      AED: 0.044,
      SGD: 0.016
    };
  }
}