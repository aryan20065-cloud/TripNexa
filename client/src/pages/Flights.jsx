import Navbar from "../components/layout/Navbar";
import FlightSearch from "../components/flights/FlightSearch";
import FlightCard from "../components/flights/FlightCard";

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

        <div className="space-y-6">

          <FlightCard
            airline="IndiGo"
            time="08:30 → 10:45"
            duration="2h 15m"
            price="₹4,599"
            stops="Non Stop"
          />

          <FlightCard
            airline="Air India"
            time="11:15 → 13:40"
            duration="2h 25m"
            price="₹5,299"
            stops="1 Stop"
          />

          <FlightCard
            airline="Vistara"
            time="15:00 → 17:20"
            duration="2h 20m"
            price="₹4,999"
            stops="Non Stop"
          />

        </div>

      </section>

    </div>
  );
}

export default Flights;