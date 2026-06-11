import { useState } from "react";
import cities from "../../data/cities";

function FlightSearch({ from, setFrom, to, setTo }) {
  const [tripType, setTripType] = useState("oneway");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showTraveller, setShowTraveller] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");
  const [fare, setFare] = useState("Regular");

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const totalTravellers = adults + children + infants;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-7xl mx-auto -mt-16 relative z-10">
      <h2 className="text-3xl font-bold mb-8 text-slate-900">
        Search Flights
      </h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {[
          { id: "oneway", label: "One Way" },
          { id: "roundtrip", label: "Round Trip" },
          { id: "multicity", label: "Multi City" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTripType(item.id)}
            className={`px-6 py-3 rounded-full font-bold transition ${
              tripType === item.id
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-6 gap-4">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-4 border rounded-2xl outline-none"
        >
          <option value="">From</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        <button
          onClick={swapCities}
          className="bg-blue-50 text-blue-700 rounded-2xl font-bold hover:bg-blue-100 transition"
        >
          ⇄
        </button>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-4 border rounded-2xl outline-none"
        >
          <option value="">To</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        <input
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="p-4 border rounded-2xl outline-none"
          type="date"
        />

        {tripType === "roundtrip" ? (
          <input
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="p-4 border rounded-2xl outline-none"
            type="date"
          />
        ) : (
          <div className="p-4 border rounded-2xl text-slate-400">
            Add Return
          </div>
        )}

        <button
          onClick={() => setShowTraveller(!showTraveller)}
          className="p-4 border rounded-2xl text-left font-semibold"
        >
          {totalTravellers} Traveller • {travelClass}
        </button>
      </div>

      {showTraveller && (
        <div className="mt-6 bg-slate-50 rounded-3xl p-6 shadow-inner">
          <div className="grid md:grid-cols-3 gap-6">
            <Counter label="Adults" value={adults} setValue={setAdults} min={1} />
            <Counter label="Children" value={children} setValue={setChildren} />
            <Counter label="Infants" value={infants} setValue={setInfants} />
          </div>

          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="mt-6 w-full p-4 border rounded-2xl outline-none"
          >
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
      )}

      <div className="mt-8">
        <h3 className="font-bold mb-4 text-slate-900">Special Fare</h3>

        <div className="flex flex-wrap gap-3">
          {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctors & Nurses"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFare(item)}
                className={`px-5 py-3 rounded-xl font-semibold transition ${
                  fare === item
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 transition">
        Search Flights
      </button>
    </div>
  );
}

function Counter({ label, value, setValue, min = 0 }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <p className="font-bold mb-4">{label}</p>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setValue(Math.max(min, value - 1))}
          className="bg-slate-200 px-4 py-2 rounded-xl font-bold"
        >
          -
        </button>

        <span className="text-2xl font-bold">{value}</span>

        <button
          onClick={() => setValue(value + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default FlightSearch;