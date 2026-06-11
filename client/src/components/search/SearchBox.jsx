import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cities from "../../data/cities";

function SearchBox() {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [fare, setFare] = useState("Regular");

  const inputClass =
    "w-full h-16 px-4 text-lg bg-white text-slate-900 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400";

  const services = [
    { icon: "✈", label: "Flights", path: "/flights" },
    { icon: "🏨", label: "Hotels", path: "/hotels" },
    { icon: "🏡", label: "Villas", path: "/hotels" },
    { icon: "🌴", label: "Holidays", path: "/holidays" },
    { icon: "🚆", label: "Trains", path: "/trains" },
    { icon: "🚌", label: "Buses", path: "/bus" },
    { icon: "🚕", label: "Cabs", path: "/cabs" },
    { icon: "🛂", label: "Visa", path: "/visa" },
    { icon: "🚢", label: "Cruise", path: "/cruise" },
    { icon: "🛡", label: "Insurance", path: "/insurance" },
  ];

  const fares = [
    "Regular",
    "Student",
    "Senior Citizen",
    "Armed Forces",
    "Doctors & Nurses",
  ];

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
      alert("From and To locations cannot be the same.");
      return;
    }

    if (!departure) {
      alert("Please select a departure date.");
      return;
    }

    if (tripType === "roundtrip" && !returnDate) {
      alert("Please select a return date.");
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
    });

    navigate(`/flights?${params.toString()}`);
  };

  return (
    <div className="mt-16 mx-auto max-w-7xl rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6">
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-8">
        {services.map((service) => (
          <Link
            key={service.label}
            to={service.path}
            className="bg-white text-blue-600 rounded-2xl p-4 font-bold hover:bg-cyan-300 transition text-center"
          >
            <div className="text-3xl">{service.icon}</div>
            <div className="text-sm mt-1">{service.label}</div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {[
          ["oneway", "One Way"],
          ["roundtrip", "Round Trip"],
          ["multicity", "Multi City"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setTripType(value)}
            className={`px-6 py-3 rounded-full font-bold transition ${
              tripType === value
                ? "bg-cyan-400 text-slate-900"
                : "bg-white text-slate-800"
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
          className="h-16 bg-white rounded-2xl font-bold text-blue-600 text-3xl hover:bg-cyan-300 transition"
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
          className={inputClass}
          type="date"
        />

        {tripType === "roundtrip" ? (
          <input
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className={inputClass}
            type="date"
          />
        ) : (
          <div className="h-16 px-4 flex items-center rounded-2xl bg-white text-slate-400 text-lg">
            Add Return
          </div>
        )}

        <input
          value={travellers}
          onChange={(e) => setTravellers(e.target.value)}
          className={inputClass}
          type="number"
          min="1"
          placeholder="Travellers"
        />
      </div>

      {tripType === "multicity" && (
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <select className={inputClass}>
            <option>Second From City</option>
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>

          <select className={inputClass}>
            <option>Second To City</option>
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>

          <input className={inputClass} type="date" />
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-white font-bold mb-3">SPECIAL FARES</h3>

        <div className="flex flex-wrap gap-3">
          {fares.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFare(item)}
              className={`px-5 py-3 rounded-xl font-semibold transition ${
                fare === item
                  ? "bg-cyan-400 text-slate-900"
                  : "bg-white text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
        <label className="flex items-center gap-3 bg-white text-slate-900 p-4 rounded-xl flex-1">
          <input type="checkbox" />
          Add Price Drop Protection
        </label>

        <Link
          to="/flight-tracker"
          className="bg-white text-slate-900 p-4 rounded-xl font-semibold hover:bg-cyan-300"
        >
          🛫 Flight Tracker
        </Link>
      </div>

      <div className="text-center mt-8">
        <button
          type="button"
          onClick={handleSearch}
          className="inline-block bg-cyan-400 text-slate-900 px-20 py-4 rounded-full text-2xl font-bold hover:scale-105 transition"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default SearchBox;