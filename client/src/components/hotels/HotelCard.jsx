import { useState } from "react";

function HotelCard({ hotel }) {
  const [showModal, setShowModal] = useState(false);

  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");

  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const [roomType, setRoomType] = useState("Deluxe Room");

  const total = hotel.price * rooms;

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">

        <div className="h-60 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center text-8xl">
          🏨
        </div>

        <div className="p-6">

          <div className="flex justify-between items-start">

            <div>

              <h2 className="text-4xl font-bold text-blue-700">
                {hotel.name}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {hotel.city}
              </p>

              <p className="text-yellow-500 mt-2 text-xl">
                ⭐ {hotel.rating}
              </p>

            </div>

            <div className="text-right">

              <h2 className="text-4xl font-bold text-green-600">
                ₹{hotel.price.toLocaleString()}
              </h2>

              <p className="text-gray-500">
                per night
              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
              Free Breakfast
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">
              Free WiFi
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold">
              Swimming Pool
            </span>

            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold">
              Free Cancellation
            </span>

          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl text-xl font-bold"
          >
            Book Hotel
          </button>

        </div>

      </div>

      {showModal && (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-5">

          <div className="bg-white rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            <h2 className="text-4xl font-bold mb-8">
              🏨 Hotel Booking
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                className="border p-4 rounded-xl"
                placeholder="Guest Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />

              <input
                className="border p-4 rounded-xl"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <select
                className="border p-4 rounded-xl"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
              >
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
                <option value={3}>3 Rooms</option>
              </select>

              <select
                className="border p-4 rounded-xl"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
              </select>

              <select
                className="border p-4 rounded-xl md:col-span-2"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option>Deluxe Room</option>
                <option>Premium Room</option>
                <option>Suite</option>
                <option>Presidential Suite</option>
              </select>

            </div>

            <div className="bg-slate-100 rounded-2xl p-6 mt-8">

              <p>
                <b>Hotel :</b> {hotel.name}
              </p>

              <p>
                <b>Room :</b> {roomType}
              </p>

              <p>
                <b>Guests :</b> {guests}
              </p>

              <p>
                <b>Rooms :</b> {rooms}
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-5">
                Total ₹{total.toLocaleString()}
              </h2>

            </div>

            <div className="flex gap-4 mt-8">

              <button
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold"
              >
                Continue Payment
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 py-4 rounded-xl font-bold"
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