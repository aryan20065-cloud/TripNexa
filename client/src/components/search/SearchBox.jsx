import { Link } from "react-router-dom";

function SearchBox() {
  const tabs = [
    { name: "✈ Flights", path: "/flights" },
    { name: "🏨 Hotels", path: "/hotels" },
    { name: "🚆 Trains", path: "/trains" },
    { name: "🚌 Bus", path: "/bus" },
    { name: "🌍 Holidays", path: "/holidays" },
  ];

  return (
    <div className="mt-16 mx-auto max-w-6xl rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6">
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        <input className="p-4 rounded-2xl outline-none" placeholder="From" />
        <input className="p-4 rounded-2xl outline-none" placeholder="To" />
        <input className="p-4 rounded-2xl outline-none" type="date" />
        <input className="p-4 rounded-2xl outline-none" placeholder="Travellers" />

        <Link
          to="/flights"
          className="bg-cyan-400 text-slate-900 rounded-2xl font-bold hover:scale-105 transition flex items-center justify-center"
        >
          Search
        </Link>
      </div>
    </div>
  );
}

export default SearchBox;