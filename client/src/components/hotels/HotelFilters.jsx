function HotelFilter({
  price,
  setPrice,
  rating,
  setRating,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6">

      <div>
        <h3 className="text-2xl font-bold mb-4">
          💰 Price Range
        </h3>

        <input
          type="range"
          min="1000"
          max="50000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />

        <p className="mt-3 font-bold">
          ₹ {price}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">
          ⭐ Minimum Rating
        </h3>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        >
          <option value={0}>All Ratings</option>
          <option value={3}>3 Star & Above</option>
          <option value={4}>4 Star & Above</option>
          <option value={5}>5 Star Only</option>
        </select>
      </div>

    </div>
  );
}

export default HotelFilter;