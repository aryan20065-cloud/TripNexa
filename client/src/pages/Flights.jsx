import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import FlightSearch from "../components/flights/FlightSearch";
import FlightCard from "../components/flights/FlightCard";
import FlightFilters from "../components/flights/FlightFilters";
import flights from "../data/flights";

function Flights() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filteredFlights = flights.filter((flight) => {
    return (
      flight.from.toLowerCase().includes(from.toLowerCase()) &&
      flight.to.toLowerCase().includes(to.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 pb-28">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">✈ Book Your Flight</h1>
          <p className="text-xl opacity-90">
            Find the best deals from thousands of flights
          </p>
        </div>
      </section>

      <div className="px-6">
        <FlightSearch from={from} setFrom={setFrom} to={to} setTo={setTo} />
      </div>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Today's Best Flights</h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <FlightFilters />
          </div>

          <div className="md:col-span-3 space-y-6">
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  airline={flight.airline}
                  time={`${flight.departure} → ${flight.arrival}`}
                  duration={flight.duration}
                  price={`₹${flight.price}`}
                  stops={flight.stops}
                />
              ))
            ) : (
              <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
                <h3 className="text-3xl font-bold text-slate-800">
                  No flights found
                </h3>
                <p className="text-slate-500 mt-3">
                  Try Delhi to Mumbai, Delhi to Goa, or Mumbai to Chennai.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flights;