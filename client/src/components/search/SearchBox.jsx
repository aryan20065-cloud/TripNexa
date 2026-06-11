import { Link } from "react-router-dom";

function SearchBox() {
  const services = [
    { name: "✈ Flights", path: "/flights" },
    { name: "🏨 Hotels", path: "/hotels" },
    { name: "🏡 Villas", path: "/hotels" },
    { name: "🌴 Holidays", path: "/holidays" },
    { name: "🚆 Trains", path: "/trains" },
    { name: "🚌 Buses", path: "/bus" },
    { name: "🚕 Cabs", path: "/cabs" },
    { name: "🛂 Visa", path: "/visa" },
    { name: "🚢 Cruise", path: "/cruise" },
    { name: "🛡 Insurance", path: "/insurance" },
  ];

  const fares = [
    "Regular",
    "Student",
    "Senior Citizen",
    "Armed Forces",
    "Doctors & Nurses",
  ];

  return (
    <div className="mx-auto max-w-7xl -mt-6 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 text-center mb-8">
          {services.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="p-3 rounded-2xl hover:bg-blue-50 text-slate-800 font-semibold transition"
            >
              <div className="text-3xl mb-1">{item.name.split(" ")[0]}</div>
              <div className="text-sm">{item.name.substring(2)}</div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mb-6 font-semibold text-slate-700">
          <label>
            <input type="radio" name="trip" defaultChecked /> One Way
          </label>
          <label>
            <input type="radio" name="trip" /> Round Trip
          </label>
          <label>
            <input type="radio" name="trip" /> Multi City
          </label>
        </div>

        <div className="grid md:grid-cols-5 border rounded-2xl overflow-hidden">
          <div className="p-5 border-r">
            <p className="text-slate-500">From</p>
            <h2 className="text-3xl font-bold">New Delhi</h2>
            <p className="text-sm text-slate-500">DEL Airport</p>
          </div>

          <div className="p-5 border-r">
            <p className="text-slate-500">To</p>
            <h2 className="text-3xl font-bold">Bengaluru</h2>
            <p className="text-sm text-slate-500">BLR Airport</p>
          </div>

          <div className="p-5 border-r">
            <p className="text-slate-500">Departure</p>
            <h2 className="text-3xl font-bold">26 Jun</h2>
            <p className="text-sm text-slate-500">Friday</p>
          </div>

          <div className="p-5 border-r">
            <p className="text-slate-500">Return</p>
            <h2 className="text-xl font-bold text-slate-400">Add Return</h2>
            <p className="text-sm text-slate-500">Save more</p>
          </div>

          <div className="p-5">
            <p className="text-slate-500">Travellers & Class</p>
            <h2 className="text-3xl font-bold">1 Traveller</h2>
            <p className="text-sm text-slate-500">Economy</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold mb-3">SPECIAL FARES</h3>

          <div className="flex flex-wrap gap-3">
            {fares.map((fare) => (
              <button
                key={fare}
                className="border px-5 py-3 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition"
              >
                {fare}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
          <label className="flex items-center gap-3 bg-blue-50 border border-blue-200 p-4 rounded-xl flex-1">
            <input type="checkbox" />
            Add Price Drop Protection
          </label>

          <Link
            to="/flight-tracker"
            className="border p-4 rounded-xl font-semibold hover:bg-slate-100"
          >
            🛫 Flight Tracker
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/flights"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-20 py-4 rounded-full text-2xl font-bold shadow-xl"
          >
            SEARCH
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;