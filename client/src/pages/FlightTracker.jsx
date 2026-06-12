import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import flights from "../data/flights";

function FlightTracker() {
  const [flightNo, setFlightNo] = useState("");
  const [result, setResult] = useState(null);

  const searchFlight = () => {
    const found = flights.find(
      (flight) =>
        flight.flightNumber.toLowerCase() === flightNo.trim().toLowerCase()
    );

    setResult(found || "not-found");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-5xl mx-auto pt-36 px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-bold text-center mb-10">
            🛫 Flight Tracker
          </h1>

          <div className="flex gap-4 mb-10">
            <input
              value={flightNo}
              onChange={(e) => setFlightNo(e.target.value)}
              placeholder="Enter Flight Number eg: AI302"
              className="flex-1 p-4 border rounded-xl"
            />

            <button
              onClick={searchFlight}
              className="bg-blue-600 text-white px-8 rounded-xl font-bold"
            >
              Search
            </button>
          </div>

          {result === "not-found" && (
            <div className="bg-red-50 text-red-600 p-6 rounded-2xl font-bold text-center">
              No flight found. Try 6E203, AI302, UK808, QP145, or EK511.
            </div>
          )}

          {result && result !== "not-found" && (
            <div className="space-y-8">
              <div className="bg-green-50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">Flight Status</h2>

                <p className="text-green-600 text-xl font-bold">
                  🟢 On Time
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-5">
                  <p>
                    <b>Flight Number:</b> {result.flightNumber}
                  </p>

                  <p>
                    <b>Airline:</b> {result.airline}
                  </p>

                  <p>
                    <b>Route:</b> {result.from} → {result.to}
                  </p>

                  <p>
                    <b>Stops:</b> {result.stops}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    🛫 Departure Details
                  </h2>

                  <p>
                    <b>City:</b> {result.from}
                  </p>

                  <p>
                    <b>Airport:</b> {result.fromAirport}
                  </p>

                  <p>
                    <b>Airport Code:</b> {result.fromCode}
                  </p>

                  <p>
                    <b>Departure Time:</b> {result.departure}
                  </p>

                  <p>
                    <b>Gate:</b> A12
                  </p>

                  <p>
                    <b>Terminal:</b> 2
                  </p>

                  <p>
                    <b>Boarding:</b> 45 min before departure
                  </p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    🛬 Arrival Details
                  </h2>

                  <p>
                    <b>City:</b> {result.to}
                  </p>

                  <p>
                    <b>Airport:</b> {result.toAirport}
                  </p>

                  <p>
                    <b>Airport Code:</b> {result.toCode}
                  </p>

                  <p>
                    <b>Arrival Time:</b> {result.arrival}
                  </p>

                  <p>
                    <b>Terminal:</b> 1
                  </p>

                  <p>
                    <b>Baggage Belt:</b> B4
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightTracker;