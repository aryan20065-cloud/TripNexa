function AIPlanner() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-cyan-400 text-lg font-bold mb-4">
              🤖 AI Powered
            </p>

            <h2 className="text-6xl font-bold mb-8">
              Plan Your Entire Trip in Seconds
            </h2>

            <p className="text-xl opacity-80 mb-10">
              Tell TripNexa your budget and destination.
              Our AI will create flights, hotels, activities and a complete itinerary.
            </p>

            <button className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Try AI Planner
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-6">
              Example Prompt
            </h3>

            <div className="bg-slate-800 rounded-2xl p-6">
              Plan a 5 day Goa trip under ₹25,000 including hotel and flights.
            </div>

            <div className="mt-8 space-y-3">
              <div>✈ Flights Selected</div>
              <div>🏨 Beach Hotel Booked</div>
              <div>🍽 Top Restaurants Added</div>
              <div>🎯 Activities Planned</div>
              <div>💰 Budget Optimized</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AIPlanner;