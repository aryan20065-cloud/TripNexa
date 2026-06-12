import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cities from "../../data/cities";

function FlightSearch({ from, setFrom, to, setTo }) {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [fare, setFare] = useState("Regular");

  const [multiFrom, setMultiFrom] = useState("");
  const [multiTo, setMultiTo] = useState("");
  const [multiDate, setMultiDate] = useState("");

  const inputClass =
    "w-full h-16 px-5 text-lg bg-white text-slate-900 border border-slate-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500";

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please select From and To locations.");
      return;
    }

    if (from === to) {
      alert("From and To cannot be same.");
      return;
    }

    if (!departure) {
      alert("Please select departure date.");
      return;
    }

    if (tripType === "roundtrip" && !returnDate) {
      alert("Please select return date.");
      return;
    }

    if (tripType === "multicity" && (!multiFrom || !multiTo || !multiDate)) {
      alert("Please fill Multi City second route.");
      return;
    }

    const params = new URLSearchParams({
      searched: "true",
      tripType,
      from,
      to,
      departure,
      returnDate,
      travellers: String(travellers),
      fare,
      multiFrom,
      multiTo,
      multiDate,
    });

    navigate(`/flights?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-7xl mx-auto -mt-16 relative z-10">
      <h2 className="text-4xl font-bold mb-8">Search Flights</h2>

      <div className="flex flex-wrap gap-5 mb-8">
        {[
          ["oneway", "One Way"],
          ["roundtrip", "Round Trip"],
          ["multicity", "Multi City"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setTripType(value)}
            className={`px-8 py-4 rounded-full font-bold transition ${
              tripType === value
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-6 gap-4">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className={inputClass}
        >
          <option value="">From</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={swapCities}
          className="h-16 bg-blue-50 text-blue-700 rounded-2xl font-bold text-2xl hover:bg-blue-100"
        >
          ⇄
        </button>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className={inputClass}
        >
          <option value="">To</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <input
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          type="date"
          className={inputClass}
        />

        {tripType === "roundtrip" ? (
          <input
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            type="date"
            className={inputClass}
          />
        ) : (
          <div className="h-16 px-5 flex items-center rounded-2xl border border-slate-300 text-slate-400">
            Add Return
          </div>
        )}

        <input
          value={travellers}
          onChange={(e) => setTravellers(e.target.value)}
          type="number"
          min="1"
          className={inputClass}
        />
      </div>

      {tripType === "multicity" && (
        <div className="mt-6 bg-slate-50 border rounded-3xl p-6">
          <h3 className="text-2xl font-bold mb-4">Multi City Second Route</h3>

          <div className="grid md:grid-cols-3 gap-4">
            <select
              value={multiFrom}
              onChange={(e) => setMultiFrom(e.target.value)}
              className={inputClass}
            >
              <option value="">Second From City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              value={multiTo}
              onChange={(e) => setMultiTo(e.target.value)}
              className={inputClass}
            >
              <option value="">Second To City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              value={multiDate}
              onChange={(e) => setMultiDate(e.target.value)}
              type="date"
              className={inputClass}
            />
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Special Fare</h3>

        <div className="flex flex-wrap gap-4">
          {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctors & Nurses"].map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFare(item)}
                className={`px-6 py-4 rounded-xl font-bold ${
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

      <button
        type="button"
        onClick={handleSearch}
        className="mt-10 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition"
      >
        Search Flights
      </button>
    </div>
  );
}

export default FlightSearch;