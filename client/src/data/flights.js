import cities from "./cities";

const airportMap = {
  "Delhi, India": { name: "Indira Gandhi International Airport", code: "DEL" },
  "Mumbai, India": { name: "Chhatrapati Shivaji Maharaj International Airport", code: "BOM" },
  "Bangalore, India": { name: "Kempegowda International Airport", code: "BLR" },
  "Chennai, India": { name: "Chennai International Airport", code: "MAA" },
  "Hyderabad, India": { name: "Rajiv Gandhi International Airport", code: "HYD" },
  "Goa, India": { name: "Manohar International Airport", code: "GOX" },
  "Kolkata, India": { name: "Netaji Subhas Chandra Bose International Airport", code: "CCU" },
  "Ahmedabad, India": { name: "Sardar Vallabhbhai Patel International Airport", code: "AMD" },
  "Pune, India": { name: "Pune International Airport", code: "PNQ" },
  "Dubai, UAE": { name: "Dubai International Airport", code: "DXB" },
  Singapore: { name: "Singapore Changi Airport", code: "SIN" },
  "London, UK": { name: "Heathrow Airport", code: "LHR" },
  "Paris, France": { name: "Charles de Gaulle Airport", code: "CDG" },
  "New York, USA": { name: "John F. Kennedy International Airport", code: "JFK" },
  "Tokyo, Japan": { name: "Haneda Airport", code: "HND" },
  "Bali, Indonesia": { name: "Ngurah Rai International Airport", code: "DPS" },
};

const airlines = [
  { airline: "IndiGo", logo: "🔵", code: "6E", stops: "Non Stop", base: 4500 },
  { airline: "Air India", logo: "🇮🇳", code: "AI", stops: "1 Stop", base: 6500 },
  { airline: "Vistara", logo: "⭐", code: "UK", stops: "Non Stop", base: 7000 },
  { airline: "Emirates", logo: "🔴", code: "EK", stops: "1 Stop", base: 12000 },
];

const times = [
  ["06:30", "08:45", "2h 15m"],
  ["10:15", "12:40", "2h 25m"],
  ["15:00", "17:20", "2h 20m"],
  ["20:30", "23:00", "2h 30m"],
];

const flights = [];

cities.forEach((from, fromIndex) => {
  cities.forEach((to, toIndex) => {
    if (from === to) return;

    airlines.forEach((air, index) => {
      flights.push({
        id: flights.length + 1,
        flightNumber: `${air.code}${200 + fromIndex * 10 + toIndex + index}`,
        logo: air.logo,
        airline: air.airline,
        from,
        to,
        fromAirport: airportMap[from]?.name || "Main Airport",
        fromCode: airportMap[from]?.code || "XXX",
        toAirport: airportMap[to]?.name || "Main Airport",
        toCode: airportMap[to]?.code || "YYY",
        departure: times[index][0],
        arrival: times[index][1],
        duration: times[index][2],
        stops: air.stops,
        price: air.base + Math.abs(fromIndex - toIndex) * 900,
        operatesDaily: true,
      });
    });
  });
});

export default flights;