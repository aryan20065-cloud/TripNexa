function FlightCard({
  airline,
  time,
  duration,
  price,
  stops,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col md:flex-row justify-between items-center gap-6">

      <div>
        <h3 className="text-3xl font-bold text-blue-700">
          ✈ {airline}
        </h3>

        <p className="text-gray-500 mt-2">
          {stops}
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {time}
        </h2>

        <p className="text-gray-500 mt-2">
          {duration}
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600">
          {price}
        </h2>

        <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition">
          Book Now
        </button>
      </div>

    </div>
  );
}

export default FlightCard;