import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";

function FlightCard({ logo, airline, from, to, time, duration, price, stops }) {
  const [showModal, setShowModal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const airlineLogo = {
    IndiGo: "🔵",
    "Air India": "🇮🇳",
    Vistara: "⭐",
    "Akasa Air": "🟣",
    Emirates: "🔴",
  };

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "TRIP500") setDiscount(500);
    else alert("Invalid Coupon");
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-4">
              <WishlistButton />
              <div className="text-4xl">{airlineLogo[airline] || "✈️"}</div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">{airline}</h3>
                <p className="text-gray-500">{stops}</p>
                <p className="text-yellow-500 font-bold">⭐ 4.8 Rating</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
                Best Price
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                15kg Baggage
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-sm">
                Free Meal
              </span>
            </div>
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
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              ✈ Confirm Booking
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <p><strong>Airline:</strong> {airline}</p>
              <p><strong>Time:</strong> {time}</p>
              <p><strong>Duration:</strong> {duration}</p>
              <p><strong>Price:</strong> {price}</p>
            </div>

            <input className="w-full p-4 border rounded-xl mb-4" placeholder="Passenger Name" />
            <input className="w-full p-4 border rounded-xl mb-4" type="number" placeholder="Age" />

            <select className="w-full p-4 border rounded-xl mb-4">
              <option>Seat 12A - Window</option>
              <option>Seat 12B - Middle</option>
              <option>Seat 12C - Aisle</option>
              <option>Seat 14A - Window</option>
            </select>

            <select className="w-full p-4 border rounded-xl mb-4">
              <option>Vegetarian Meal</option>
              <option>Non-Vegetarian Meal</option>
              <option>Vegan Meal</option>
              <option>Jain Meal</option>
            </select>

            <select className="w-full p-4 border rounded-xl mb-4">
              <option>15kg Included</option>
              <option>20kg + ₹300</option>
              <option>25kg + ₹600</option>
              <option>30kg + ₹900</option>
            </select>

            <select className="w-full p-4 border rounded-xl mb-4">
              <option>Economy Class</option>
              <option>Premium Economy</option>
              <option>Business Class</option>
            </select>

            <div className="flex gap-3 mb-4">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 p-4 border rounded-xl"
                placeholder="Coupon Code: TRIP500"
              />
              <button
                onClick={applyCoupon}
                className="bg-green-600 text-white px-6 rounded-xl font-bold"
              >
                Apply
              </button>
            </div>

            {discount > 0 && (
              <p className="text-green-600 font-bold mb-4">
                ₹{discount} discount applied!
              </p>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate("/payment");
                }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold"
              >
                Continue to Payment
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