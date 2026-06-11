import { useState } from "react";
import Navbar from "../components/layout/Navbar";

function FlightTracker() {
  const [flightNo, setFlightNo] = useState("");

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
              placeholder="Enter Flight Number (AI302)"
              className="flex-1 p-4 border rounded-xl"
            />

            <button className="bg-blue-600 text-white px-8 rounded-xl font-bold">
              Search
            </button>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-green-50 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-4">
                Flight Status
              </h2>

              <p className="text-green-600 text-xl font-bold">
                🟢 On Time
              </p>

              <p className="mt-4">
                Departure : 08:30 AM
              </p>

              <p>
                Arrival : 10:45 AM
              </p>

            </div>

            <div className="bg-blue-50 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-4">
                Airport Details
              </h2>

              <p>
                Gate : A12
              </p>

              <p>
                Terminal : 2
              </p>

              <p>
                Boarding : 07:45 AM
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default FlightTracker;