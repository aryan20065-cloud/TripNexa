import { useState } from "react";

function FlightCard({ airline, time, duration, price, stops }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-3xl font-bold text-blue-700">✈ {airline}</h3>
          <p className="text-gray-500 mt-2">{stops}</p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold">{time}</h2>
          <p className="text-gray-500 mt-2">{duration}</p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600">{price}</h2>

          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-6">
              ✈ Confirm Booking
            </h2>

            <div className="space-y-3 mb-6">
              <p><b>Airline:</b> {airline}</p>
              <p><b>Time:</b> {time}</p>
              <p><b>Duration:</b> {duration}</p>
              <p><b>Price:</b> {price}</p>
            </div>

            <input
              className="w-full p-4 border rounded-xl mb-4"
              placeholder="Passenger Name"
            />

            <input
              className="w-full p-4 border rounded-xl mb-4"
              placeholder="Age"
            />

            <select className="w-full p-4 border rounded-xl mb-4">
              <option>Window Seat</option>
              <option>Aisle Seat</option>
              <option>Middle Seat</option>
            </select>

            <select className="w-full p-4 border rounded-xl mb-6">
              <option>Economy Class</option>
              <option>Premium Economy</option>
              <option>Business Class</option>
            </select>

            <div className="flex gap-4">
              <button
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition"
                onClick={() => {
                  alert("🎉 Booking Confirmed Successfully!");
                  setShowModal(false);
                }}
              >
                Confirm Booking
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FlightCard;