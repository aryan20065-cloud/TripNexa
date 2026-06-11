function FlightFilters() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <h3 className="text-2xl font-bold mb-6">Filters</h3>

      <div className="space-y-4">
        <label className="flex gap-3 items-center">
          <input type="checkbox" />
          Non Stop
        </label>

        <label className="flex gap-3 items-center">
          <input type="checkbox" />
          One Stop
        </label>

        <label className="flex gap-3 items-center">
          <input type="checkbox" />
          Morning Flights
        </label>

        <label className="flex gap-3 items-center">
          <input type="checkbox" />
          Evening Flights
        </label>
      </div>

      <div className="mt-8">
        <p className="font-bold mb-3">Price Range</p>
        <input type="range" min="2000" max="10000" className="w-full" />
      </div>
    </div>
  );
}

export default FlightFilters;