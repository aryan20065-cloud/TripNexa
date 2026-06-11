import Navbar from "../components/layout/Navbar";
import FlightSearch from "../components/flights/FlightSearch";
import FlightCard from "../components/flights/FlightCard";
import FlightFilters from "../components/flights/FlightFilters";
import flights from "../data/flights";

function Flights() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 pb-28">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            ✈ Book Your Flight
          </h1>

          <p className="text-xl opacity-90">
            Find the best deals from thousands of flights
          </p>
        </div>
      </section>

      {/* Search Box */}
      <div className="px-6">
        <FlightSearch />
      </div>

      {/* Flight Results */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">
          Today's Best Flights
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Filters */}
          <div>
            <FlightFilters />
          </div>

          {/* Right Flight Cards */}
          <div className="md:col-span-3 space-y-6">
            {flights.map((flight) => (
              <FlightCard
                key={flight.id}
                airline={flight.airline}
                time={`${flight.departure} → ${flight.arrival}`}
                duration={flight.duration}
                price={`₹${flight.price}`}
                stops={flight.stops}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flights;