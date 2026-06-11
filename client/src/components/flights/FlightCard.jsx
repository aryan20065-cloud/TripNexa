function FlightCard({ airline, time, duration, price, stops }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="text-2xl font-bold">{airline}</h3>
        <p className="text-slate-500">{stops}</p>
      </div>

      <div className="text-center">
        <p className="text-xl font-bold">{time}</p>
        <p className="text-slate-500">{duration}</p>
      </div>

      <div className="text-center">
        <p className="text-2xl font-bold text-blue-600">{price}</p>
        <button className="mt-3 bg-blue-600 text-white px-6 py-3 rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default FlightCard;