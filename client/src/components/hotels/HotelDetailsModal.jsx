import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/currency";

function HotelDetailsModal({ hotel, show, onClose }) {
  const navigate = useNavigate();

  const [guestsList, setGuestsList] = useState([{ name: "", age: "" }]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState(hotel.rooms?.[0] || "Deluxe Room");
  const [specialRequest, setSpecialRequest] = useState("");

  if (!show) return null;

  const total = hotel.price * rooms;

  const addGuest = () => {
    setGuestsList([...guestsList, { name: "", age: "" }]);
  };

  const updateGuest = (index, field, value) => {
    const updated = [...guestsList];
    updated[index][field] = value;
    setGuestsList(updated);
  };

  const removeGuest = (index) => {
    if (guestsList.length === 1) return;
    setGuestsList(guestsList.filter((_, i) => i !== index));
  };

  const confirmBooking = () => {
    const validGuests = guestsList.every(
      (guest) => guest.name.trim() !== "" && guest.age.trim() !== ""
    );

    if (!validGuests || !phone || !email) {
      alert("Please fill all guest details, phone number and email.");
      return;
    }

    navigate("/hotel-booking-success", {
      state: {
        hotelName: hotel.name,
        city: hotel.city,
        guestsList,
        phone,
        email,
        rooms,
        guests,
        roomType,
        specialRequest,
        total,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-5">
      <div className="bg-white rounded-3xl max-w-5xl w-full p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">🏨 {hotel.name}</h2>

          <button onClick={onClose} className="text-3xl font-bold">
            ✕
          </button>
        </div>

        <p className="text-gray-500 mt-2">📍 {hotel.city}</p>

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
          <h3 className="text-3xl font-bold mb-5">Amenities</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {(hotel.amenities || [
              "Free WiFi",
              "Swimming Pool",
              "Free Breakfast",
              "Spa",
              "Restaurant",
              "Airport Shuttle",
              "Parking",
              "Gym",
              "Room Service",
            ]).map((item) => (
              <div key={item}>✅ {item}</div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-3xl font-bold mb-5">Guest Details</h3>

          <div className="space-y-4">
            {guestsList.map((guest, index) => (
              <div
                key={index}
                className="grid md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border"
              >
                <input
                  className="border rounded-xl p-4"
                  placeholder={`Guest ${index + 1} Name`}
                  value={guest.name}
                  onChange={(e) =>
                    updateGuest(index, "name", e.target.value)
                  }
                />

                <input
                  className="border rounded-xl p-4"
                  placeholder="Age"
                  type="number"
                  min="1"
                  value={guest.age}
                  onChange={(e) => updateGuest(index, "age", e.target.value)}
                />

                <button
                  onClick={() => removeGuest(index)}
                  disabled={guestsList.length === 1}
                  className={`rounded-xl font-bold ${
                    guestsList.length === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addGuest}
            className="mt-4 w-full bg-blue-100 text-blue-700 py-3 rounded-xl font-bold"
          >
            + Add Guest
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <input
            className="border rounded-xl p-4"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="border rounded-xl p-4"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="border rounded-xl p-4"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            {(hotel.rooms || [
              "Deluxe Room",
              "Premium Room",
              "Executive Suite",
              "Presidential Suite",
            ]).map((room) => (
              <option key={room}>{room}</option>
            ))}
          </select>

          <select
            className="border rounded-xl p-4"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          >
            <option value={1}>1 Room</option>
            <option value={2}>2 Rooms</option>
            <option value={3}>3 Rooms</option>
            <option value={4}>4 Rooms</option>
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
            <option value={5}>5 Guests</option>
            <option value={6}>6 Guests</option>
          </select>

          <textarea
            className="border rounded-xl p-4 md:col-span-2"
            placeholder="Special Request Optional"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
          />
        </div>

        <div className="bg-slate-100 rounded-3xl p-6 mt-8">
          <p>
            <b>Hotel:</b> {hotel.name}
          </p>

          <p>
            <b>Room Type:</b> {roomType}
          </p>

          <p>
            <b>Rooms:</b> {rooms}
          </p>

          <p>
            <b>Guests Selected:</b> {guests}
          </p>

          <p>
            <b>Guest Details Added:</b> {guestsList.length}
          </p>

          <p>
            <b>Price Per Room:</b> {formatPrice(hotel.price)}
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-5">
            Total {formatPrice(total)}
          </h2>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={confirmBooking}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold"
          >
            Pay & Confirm Booking
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