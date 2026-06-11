function FlightSearch() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto -mt-16 relative z-10">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">
        Search Flights
      </h2>

      <div className="grid md:grid-cols-5 gap-4">
        <input className="p-4 border rounded-2xl outline-none" placeholder="From" />
        <input className="p-4 border rounded-2xl outline-none" placeholder="To" />
        <input className="p-4 border rounded-2xl outline-none" type="date" />
        <input className="p-4 border rounded-2xl outline-none" placeholder="Travellers" />

        <button className="bg-blue-600 text-white rounded-2xl font-bold">
          Search
        </button>
      </div>
    </div>
  );
}

export default FlightSearch;