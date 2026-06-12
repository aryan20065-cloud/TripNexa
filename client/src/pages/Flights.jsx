import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import FlightSearch from "../components/flights/FlightSearch";
import FlightCard from "../components/flights/FlightCard";
import FlightSort from "../components/flights/FlightSort";
import PriceFilter from "../components/flights/PriceFilter";
import AirlineFilter from "../components/flights/AirlineFilter";
import StopsFilter from "../components/flights/StopsFilter";
import flights from "../data/flights";

function Flights() {
  const [searchParams] = useSearchParams();

  const searched = searchParams.get("searched") === "true";
  const tripType = searchParams.get("tripType") || "oneway";
  const selectedDeparture = searchParams.get("departure") || "";
  const selectedReturnDate = searchParams.get("returnDate") || "";
  const travellerCount = Number(searchParams.get("travellers") || 1);

  const [from, setFrom] = useState(searchParams.get("from") || "");
  const [to, setTo] = useState(searchParams.get("to") || "");
  const [sortBy, setSortBy] = useState("price");

  const [price, setPrice] = useState(50000);
  const [airline, setAirline] = useState("All");
  const [stops, setStops] = useState("All");

  const isSearchReady =
    searched &&
    from &&
    to &&
    selectedDeparture &&
    (tripType !== "roundtrip" || selectedReturnDate);

  const filteredFlights = flights.filter((flight) => {
    if (!isSearchReady) return false;

    const matchRoute =
      flight.from.toLowerCase().includes(from.toLowerCase()) &&
      flight.to.toLowerCase().includes(to.toLowerCase());

    const matchDepartureDate = Boolean(selectedDeparture);

    const matchReturnDate =
      tripType !== "roundtrip" || Boolean(selectedReturnDate);

    const matchPrice = flight.price <= price;
    const matchAirline = airline === "All" || flight.airline === airline;
    const matchStops = stops === "All" || flight.stops === stops;

    return (
      matchRoute &&
      matchDepartureDate &&
      matchReturnDate &&
      matchPrice &&
      matchAirline &&
      matchStops
    );
  });

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "duration") return a.duration.localeCompare(b.duration);
    if (sortBy === "airline") return a.airline.localeCompare(b.airline);
    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 pb-28">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">✈ Book Your Flight</h1>
          <p className="text-xl opacity-90">
            Search domestic and international flights by date
          </p>
        </div>
      </section>

      <div className="px-6">
        <FlightSearch from={from} setFrom={setFrom} to={to} setTo={setTo} />
      </div>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Available Flights</h2>

        {!isSearchReady ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-slate-800">
              Search flights to see results
            </h3>

            <p className="text-slate-500 mt-3">
              Select From, To and Departure Date.
              {tripType === "roundtrip" &&
                " Return date is required for round trip."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <PriceFilter price={price} setPrice={setPrice} />
              <AirlineFilter airline={airline} setAirline={setAirline} />
              <StopsFilter stops={stops} setStops={setStops} />
            </div>

            <div className="md:col-span-3">
              <FlightSort sortBy={sortBy} setSortBy={setSortBy} />

              <div className="space-y-6">
                {sortedFlights.length > 0 ? (
                  sortedFlights.map((flight) => (
                    <FlightCard
                      key={flight.id}
                      flightNumber={flight.flightNumber}
                      logo={flight.logo}
                      airline={flight.airline}
                      from={flight.from}
                      to={flight.to}
                      fromAirport={flight.fromAirport}
                      fromCode={flight.fromCode}
                      toAirport={flight.toAirport}
                      toCode={flight.toCode}
                      time={`${flight.departure} → ${flight.arrival}`}
                      duration={flight.duration}
                      price={`₹${flight.price * travellerCount}`}
                      basePrice={flight.price}
                      travellers={travellerCount}
                      stops={flight.stops}
                    />
                  ))
                ) : (
                  <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
                    <h3 className="text-3xl font-bold text-slate-800">
                      No flights found
                    </h3>

                    <p className="text-slate-500 mt-3">
                      Try changing From, To, date, price, airline or stops.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Flights;