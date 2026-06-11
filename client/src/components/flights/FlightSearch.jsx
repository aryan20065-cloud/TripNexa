function FlightSearch({ from, setFrom, to, setTo }) {
  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto -mt-16 relative z-10">
      <h2 className="text-3xl font-bold mb-8">Search Flights</h2>

      <div className="grid md:grid-cols-6 gap-4">
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-4 border rounded-2xl outline-none"
          placeholder="From"
        />

        <button
          onClick={swapCities}
          className="bg-slate-100 rounded-2xl font-bold hover:bg-blue-100 transition"
        >
          ⇄
        </button>

        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-4 border rounded-2xl outline-none"
          placeholder="To"
        />

        <input className="p-4 border rounded-2xl outline-none" type="date" />

        <input
          className="p-4 border rounded-2xl outline-none"
          placeholder="Travellers"
        />

        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:scale-105 transition">
          Search
        </button>
      </div>
    </div>
  );
}

export default FlightSearch;