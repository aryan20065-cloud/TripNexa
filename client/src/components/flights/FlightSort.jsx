function FlightSort({ sortBy, setSortBy }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => setSortBy("price")}
        className={`px-6 py-3 rounded-full font-bold ${
          sortBy === "price"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        💰 Lowest Price
      </button>

      <button
        onClick={() => setSortBy("duration")}
        className={`px-6 py-3 rounded-full font-bold ${
          sortBy === "duration"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        ⏱ Fastest
      </button>

      <button
        onClick={() => setSortBy("airline")}
        className={`px-6 py-3 rounded-full font-bold ${
          sortBy === "airline"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        ✈ Airline
      </button>
    </div>
  );
}

export default FlightSort;