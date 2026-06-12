function HotelFilter({
  price,
  setPrice,
  rating,
  setRating,
  star,
  setStar,
}) {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          💰 Price Range
        </h2>

        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />

        <p className="mt-4 text-xl font-bold text-blue-600">
          ₹1,000 - ₹{price.toLocaleString()}
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          ⭐ Rating
        </h2>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        >
          <option value={0}>All Ratings</option>
          <option value={3}>3+ Stars</option>
          <option value={4}>4+ Stars</option>
          <option value={5}>5 Stars</option>
        </select>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          🏨 Hotel Category
        </h2>

        <select
          value={star}
          onChange={(e) => setStar(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        >
          <option value={0}>All Hotels</option>
          <option value={3}>3 Star</option>
          <option value={4}>4 Star</option>
          <option value={5}>5 Star Luxury</option>
        </select>

      </div>

    </div>
  );
}

export default HotelFilter;