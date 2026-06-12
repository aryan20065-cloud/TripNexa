import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";

function FlightCard({
  flightNumber,
  logo,
  airline,
  from,
  to,
  fromAirport,
  fromCode,
  toAirport,
  toCode,
  time,
  duration,
  price,
  basePrice,
  travellers = 1,
  stops,
}) {
  const startingPassengers = Number(travellers) || 1;

  const [showModal, setShowModal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const [passengers, setPassengers] = useState(
    Array.from({ length: startingPassengers }, () => ({
      name: "",
      age: "",
      seat: "Seat 12A - Window",
    }))
  );

  const [meal, setMeal] = useState("Vegetarian Meal");
  const [baggage, setBaggage] = useState("15kg Included");
  const [travelClass, setTravelClass] = useState("Economy Class");

  const navigate = useNavigate();

  const airlineLogo = {
    IndiGo: "🔵",
    "Air India": "🇮🇳",
    Vistara: "⭐",
    "Akasa Air": "🟣",
    Emirates: "🔴",
  };

  const addPassenger = () => {
    setPassengers([
      ...passengers,
      { name: "", age: "", seat: "Seat 12A - Window" },
    ]);
  };

  const removePassenger = (index) => {
    if (passengers.length === 1) return;
    setPassengers(passengers.filter((_, i) => i !== index));
  };

  const updatePassenger = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "TRIP500") {
      setDiscount(500);
    } else if (coupon.toUpperCase() === "WELCOME10") {
      setDiscount(1000);
    } else {
      setDiscount(0);
      alert("Invalid Coupon. Try TRIP500 or WELCOME10");
    }
  };

  const isPassengerDetailsValid = passengers.every(
    (p) => p.name.trim() !== "" && p.age.trim() !== "" && Number(p.age) > 0
  );

  const numericPrice = Number(
    basePrice || String(price).replace("₹", "").replace(",", "")
  );

  const totalBeforeDiscount = numericPrice * passengers.length;
  const totalAmount = Math.max(totalBeforeDiscount - discount, 0);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-4">
              <WishlistButton />

              <div className="text-4xl">
                {logo || airlineLogo[airline] || "✈️"}
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">
                  {airline}
                </h3>

                <p className="text-sm text-blue-600 font-semibold">
                  Flight No: {flightNumber}
                </p>

                <p className="text-sm text-slate-700">
                  {from} → {to}
                </p>

                <p className="text-xs text-gray-500">
                  🛫 {fromCode} • {fromAirport}
                </p>

                <p className="text-xs text-gray-500">
                  🛬 {toCode} • {toAirport}
                </p>

                <p className="text-gray-500 mt-1">{stops}</p>

                <p className="text-yellow-500 font-bold mt-1">
                  ⭐ 4.8 Rating
                </p>
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

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm">
                Refundable
              </span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">{time}</h2>
            <p className="text-gray-500 mt-2">{duration}</p>
            <p className="text-orange-500 font-bold mt-2">
              Only 3 seats left
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">
              ₹{totalBeforeDiscount.toLocaleString()}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              for {passengers.length} traveller(s)
            </p>

            <p className="text-xs text-slate-400">
              ₹{numericPrice.toLocaleString()} per traveller
            </p>

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
          <div className="bg-white rounded-3xl p-8 w-full max-w-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              ✈ Confirm Booking
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6 bg-slate-50 p-5 rounded-2xl">
              <p><strong>Flight No:</strong> {flightNumber}</p>
              <p><strong>Airline:</strong> {airline}</p>
              <p><strong>Route:</strong> {from} → {to}</p>
              <p><strong>Departure Airport:</strong> {fromAirport} ({fromCode})</p>
              <p><strong>Arrival Airport:</strong> {toAirport} ({toCode})</p>
              <p><strong>Time:</strong> {time}</p>
              <p><strong>Duration:</strong> {duration}</p>
              <p><strong>Base Price:</strong> ₹{numericPrice.toLocaleString()} / traveller</p>
              <p><strong>Stops:</strong> {stops}</p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Passenger Details</h3>

            {!isPassengerDetailsValid && (
              <p className="mb-4 bg-red-50 text-red-600 p-3 rounded-xl font-semibold">
                Please fill passenger name and valid age before payment.
              </p>
            )}

            <div className="space-y-5">
              {passengers.map((passenger, index) => (
                <div key={index} className="border rounded-2xl p-5 bg-slate-50">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold">Passenger {index + 1}</h4>

                    {passengers.length > 1 && (
                      <button
                        onClick={() => removePassenger(index)}
                        className="text-red-600 font-bold"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      value={passenger.name}
                      onChange={(e) =>
                        updatePassenger(index, "name", e.target.value)
                      }
                      className="p-4 border rounded-xl"
                      placeholder="Passenger Name"
                    />

                    <input
                      value={passenger.age}
                      onChange={(e) =>
                        updatePassenger(index, "age", e.target.value)
                      }
                      className="p-4 border rounded-xl"
                      type="number"
                      min="1"
                      placeholder="Age"
                    />

                    <select
                      value={passenger.seat}
                      onChange={(e) =>
                        updatePassenger(index, "seat", e.target.value)
                      }
                      className="p-4 border rounded-xl"
                    >
                      <option>Seat 12A - Window</option>
                      <option>Seat 12B - Middle</option>
                      <option>Seat 12C - Aisle</option>
                      <option>Seat 14A - Window</option>
                      <option>Seat 14B - Middle</option>
                      <option>Seat 14C - Aisle</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addPassenger}
              className="mt-5 w-full bg-blue-100 text-blue-700 py-3 rounded-xl font-bold"
            >
              + Add More Passenger
            </button>

            <div className="mt-6 bg-white rounded-xl p-4 border shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-blue-700">
                👥 Passenger Summary
              </h3>

              {passengers.map((p, index) => (
                <div key={index} className="border-b last:border-b-0 py-3">
                  <p><b>Passenger {index + 1}</b></p>
                  <p>Name: {p.name || "-"}</p>
                  <p>Age: {p.age || "-"}</p>
                  <p>Seat: {p.seat}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Add-ons</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <select
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                className="p-4 border rounded-xl"
              >
                <option>Vegetarian Meal</option>
                <option>Non-Vegetarian Meal</option>
                <option>Vegan Meal</option>
                <option>Jain Meal</option>
              </select>

              <select
                value={baggage}
                onChange={(e) => setBaggage(e.target.value)}
                className="p-4 border rounded-xl"
              >
                <option>15kg Included</option>
                <option>20kg + ₹300</option>
                <option>25kg + ₹600</option>
                <option>30kg + ₹900</option>
              </select>

              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="p-4 border rounded-xl"
              >
                <option>Economy Class</option>
                <option>Premium Economy</option>
                <option>Business Class</option>
              </select>
            </div>

            <div className="flex gap-3 mt-6">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 p-4 border rounded-xl"
                placeholder="Coupon Code: TRIP500 / WELCOME10"
              />

              <button
                onClick={applyCoupon}
                className="bg-green-600 text-white px-6 rounded-xl font-bold"
              >
                Apply
              </button>
            </div>

            {discount > 0 && (
              <p className="text-green-600 font-bold mt-3">
                ₹{discount} discount applied!
              </p>
            )}

            <div className="mt-6 bg-slate-900 text-white p-5 rounded-2xl">
              <p><strong>Passengers:</strong> {passengers.length}</p>
              <p><strong>Meal:</strong> {meal}</p>
              <p><strong>Baggage:</strong> {baggage}</p>
              <p><strong>Class:</strong> {travelClass}</p>
              <p><strong>Base Fare:</strong> ₹{numericPrice.toLocaleString()} × {passengers.length}</p>
              <p><strong>Discount:</strong> ₹{discount}</p>

              <h3 className="text-2xl font-bold mt-3">
                Total: ₹{totalAmount.toLocaleString()}
              </h3>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                disabled={!isPassengerDetailsValid}
                onClick={() => {
                  if (!isPassengerDetailsValid) return;
                  setShowModal(false);
                  navigate("/payment");
                }}
                className={`flex-1 py-3 rounded-xl font-bold ${
                  isPassengerDetailsValid
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
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