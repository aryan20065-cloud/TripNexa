import { useState } from "react";
import { formatPrice } from "../../utils/currency";

function HotelCard({ hotel }) {
  const [showModal, setShowModal] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const confirmBooking = () => {
    if (!guestName || !guestPhone) {
      alert("Please fill guest name and phone number.");
      return;
    }

    alert("Hotel booking confirmed successfully!");
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">
        <div className="h-56 bg-gradient-to-r from-cyan-300 to-blue-500 flex items-center justify-center text-7xl">
          {hotel.image}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-3xl font-bold">{hotel.name}</h3>
              <p className="text-gray-500 mt-2">{hotel.city}</p>
            </div>

            <button className="text-3xl">♡</button>
          </div>

          <p className="text-yellow-500 mt-3">
            {"⭐".repeat(hotel.rating)}
          </p>

          <p className="mt-3 text-blue-600 font-bold">
            {hotel.type}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {hotel.amenities.map((item) => (
              <span
                key={item}
                className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <h4 className="text-3xl font-bold text-green-600">
                {formatPrice(hotel.price)}
              </h4>
              <p className="text-gray-500 text-sm">per night</p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold"
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
              🏨 Confirm Hotel Booking
            </h2>

            <div className="space-y-3 mb-6">
              <p><b>Hotel:</b> {hotel.name}</p>
              <p><b>City:</b> {hotel.city}</p>
              <p><b>Type:</b> {hotel.type}</p>
              <p><b>Price:</b> {formatPrice(hotel.price)} / night</p>
            </div>

            <input
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full p-4 border rounded-xl mb-4"
              placeholder="Guest Full Name"
            />

            <input
              value={guestPhone}
              onChange={(e) => setGuestPhone(e.target.value)}
              className="w-full p-4 border rounded-xl mb-6"
              placeholder="Phone Number"
            />

            <div className="flex gap-4">
              <button
                onClick={confirmBooking}
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

export default HotelCard;