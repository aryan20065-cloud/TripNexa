import { Link } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const [tripType, setTripType] = useState("oneway");

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

  return (
    <div className="mt-16 mx-auto max-w-7xl rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6">

      {/* Services */}

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

      {/* Trip Type */}

      <div className="flex justify-center gap-4 mb-8">

        <button
          onClick={() => setTripType("oneway")}
          className={`px-6 py-3 rounded-full font-bold transition ${
            tripType === "oneway"
              ? "bg-cyan-400 text-slate-900"
              : "bg-white text-slate-800"
          }`}
        >
          One Way
        </button>

        <button
          onClick={() => setTripType("roundtrip")}
          className={`px-6 py-3 rounded-full font-bold transition ${
            tripType === "roundtrip"
              ? "bg-cyan-400 text-slate-900"
              : "bg-white text-slate-800"
          }`}
        >
          Round Trip
        </button>

        <button
          onClick={() => setTripType("multicity")}
          className={`px-6 py-3 rounded-full font-bold transition ${
            tripType === "multicity"
              ? "bg-cyan-400 text-slate-900"
              : "bg-white text-slate-800"
          }`}
        >
          Multi City
        </button>

      </div>

      {/* Search Inputs */}

      <div className="grid md:grid-cols-5 gap-4">

        <input
          className="p-4 rounded-2xl outline-none"
          placeholder="From"
        />

        <input
          className="p-4 rounded-2xl outline-none"
          placeholder="To"
        />

        <input
          className="p-4 rounded-2xl outline-none"
          type="date"
        />

        <input
          className="p-4 rounded-2xl outline-none"
          placeholder="Return"
        />

        <input
          className="p-4 rounded-2xl outline-none"
          placeholder="Travellers"
        />

      </div>

      {/* Special Fares */}

      <div className="mt-6">

        <h3 className="text-white font-bold mb-3">
          SPECIAL FARES
        </h3>

        <div className="flex flex-wrap gap-3">

          {fares.map((fare) => (
            <button
              key={fare}
              className="bg-white text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
            >
              {fare}
            </button>
          ))}

        </div>

      </div>

      {/* Price Protection */}

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

      {/* Search */}

      <div className="text-center mt-8">

        <Link
          to="/flights"
          className="inline-block bg-cyan-400 text-slate-900 px-20 py-4 rounded-full text-2xl font-bold hover:scale-105 transition"
        >
          SEARCH
        </Link>

      </div>

    </div>
  );
}

export default SearchBox;