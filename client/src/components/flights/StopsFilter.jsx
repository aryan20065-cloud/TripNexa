function StopsFilter({ stops, setStops }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">🛑 Stops</h3>

      <select
        value={stops}
        onChange={(e) => setStops(e.target.value)}
        className="w-full p-3 border rounded-xl"
      >
        <option>All</option>
        <option>Non Stop</option>
        <option>1 Stop</option>
        <option>2+ Stops</option>
      </select>
    </div>
  );
}

export default StopsFilter;