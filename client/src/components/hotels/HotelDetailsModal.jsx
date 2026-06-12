import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HotelDetailsModal({ hotel, show, onClose }) {
  const navigate = useNavigate();

  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("Deluxe Room");

  if (!show) return null;

  const total =
    hotel.price * rooms;

  const confirmBooking = () => {
    if (!guestName || !phone || !email) {
      alert("Please fill all guest details.");
      return;
    }

    navigate("/hotel-booking-success", {
      state: {
        hotelName: hotel.name,
        city: hotel.city,
        guestName,
        phone,
        email,
        rooms,
        guests,
        roomType,
        total,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-5">

      <div className="bg-white rounded-3xl max-w-5xl w-full p-8 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center">

          <h2 className="text-4xl font-bold">
            🏨 {hotel.name}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold"
          >
            ✕
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">

          <div className="h-48 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center text-7xl">
            🏨
          </div>

          <div className="h-48 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 flex justify-center items-center text-7xl">
            🛏
          </div>

          <div className="h-48 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex justify-center items-center text-7xl">
            🏊
          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-3xl font-bold mb-5">
            Amenities
          </h3>

          <div className="grid md:grid-cols-3 gap-4">

            <div>✅ Free WiFi</div>
            <div>✅ Swimming Pool</div>
            <div>✅ Free Breakfast</div>
            <div>✅ Spa</div>
            <div>✅ Restaurant</div>
            <div>✅ Airport Shuttle</div>
            <div>✅ Parking</div>
            <div>✅ Gym</div>
            <div>✅ Room Service</div>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <input
            className="border rounded-xl p-4"
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />

          <input
            className="border rounded-xl p-4"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="border rounded-xl p-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="border rounded-xl p-4"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option>Deluxe Room</option>
            <option>Premium Room</option>
            <option>Executive Suite</option>
            <option>Presidential Suite</option>
          </select>

          <select
            className="border rounded-xl p-4"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          >
            <option value={1}>1 Room</option>
            <option value={2}>2 Rooms</option>
            <option value={3}>3 Rooms</option>
          </select>

          <select
            className="border rounded-xl p-4"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
          </select>

        </div>

        <div className="bg-slate-100 rounded-3xl p-6 mt-8">

          <h2 className="text-3xl font-bold text-green-600">
            Total ₹{total.toLocaleString()}
          </h2>

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={confirmBooking}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold"
          >
            Continue Payment
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 py-4 rounded-xl font-bold"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}

export default HotelDetailsModal;