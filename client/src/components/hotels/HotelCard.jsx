import { useState } from "react";
import { formatPrice } from "../../utils/currency";
import HotelDetailsModal from "./HotelDetailsModal";

function HotelCard({ hotel }) {
  const [showDetails, setShowDetails] = useState(false);

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

          <p className="mt-3 text-blue-600 font-bold">{hotel.type}</p>

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
              onClick={() => setShowDetails(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold"
            >
              View & Book
            </button>
          </div>
        </div>
      </div>

      <HotelDetailsModal
        hotel={hotel}
        show={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}

export default HotelCard;