import Navbar from "../components/layout/Navbar";

function Hotels() {
  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 pb-32">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">🏨 Book Hotels</h1>
          <p className="text-xl opacity-90">
            Find luxury stays, budget hotels and resorts
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-10 -mt-20 relative z-10">
        <h2 className="text-4xl font-bold mb-8">Search Hotels</h2>

        <div className="grid md:grid-cols-5 gap-4">
          <input
            className="p-4 border rounded-2xl"
            placeholder="City or Hotel Name"
          />

          <input className="p-4 border rounded-2xl" type="date" />

          <input className="p-4 border rounded-2xl" type="date" />

          <input
            className="p-4 border rounded-2xl"
            type="number"
            placeholder="Guests"
            min="1"
          />

          <input
            className="p-4 border rounded-2xl"
            type="number"
            placeholder="Rooms"
            min="1"
          />
        </div>

        <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl text-xl font-bold">
          Search Hotels
        </button>
      </div>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Popular Hotels</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Taj Palace", "Delhi, India", "₹8,999", "⭐⭐⭐⭐⭐"],
            ["The Oberoi", "Mumbai, India", "₹12,499", "⭐⭐⭐⭐⭐"],
            ["Leela Palace", "Bangalore, India", "₹10,999", "⭐⭐⭐⭐⭐"],
          ].map((hotel) => (
            <div
              key={hotel[0]}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="h-56 bg-gradient-to-r from-cyan-300 to-blue-500 flex items-center justify-center text-7xl">
                🏨
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold">{hotel[0]}</h3>
                <p className="text-gray-500 mt-2">{hotel[1]}</p>
                <p className="text-yellow-500 mt-2">{hotel[3]}</p>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-3xl font-bold text-green-600">
                    {hotel[2]}
                  </h4>

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hotels;