import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";

function FlightCard({ airline, time, duration, price, stops }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const airlineLogo = {
    IndiGo: "🔵",
    "Air India": "🇮🇳",
    Vistara: "⭐",
    "Akasa Air": "🟣",
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-4">
              <WishlistButton />

              <div className="text-4xl">
                {airlineLogo[airline] || "✈️"}
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">
                  {airline}
                </h3>
                <p className="text-gray-500">{stops}</p>
              </div>
            </div>

            <span className="inline-block mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
              Best Price
            </span>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">{time}</h2>
            <p className="text-gray-500 mt-2">{duration}</p>
            <p className="text-orange-500 font-bold mt-2">Only 3 seats left</p>
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
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-6">
              ✈ Confirm Booking
            </h2>

            <div className="space-y-3 mb-6">
              <p>
                <strong>Airline:</strong> {airline}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Duration:</strong> {duration}
              </p>
              <p>
                <strong>Price:</strong> {price}
              </p>
            </div>

            <input
              type="text"
              placeholder="Passenger Name"
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full p-4 border rounded-xl mb-4"
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
                onClick={() => {
                  setShowModal(false);
                  navigate("/payment");
                }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold"
              >
                Confirm Booking
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 py-3 rounded-xl font-bold"
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