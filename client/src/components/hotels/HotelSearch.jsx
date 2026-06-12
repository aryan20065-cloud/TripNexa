import { useState } from "react";

function HotelSearch({ onSearch }) {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const searchHotel = () => {
    if (!city || !checkIn || !checkOut) {
      alert("Please fill all fields.");
      return;
    }

    onSearch({
      city,
      checkIn,
      checkOut,
      rooms,
      guests,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

      <h2 className="text-3xl font-bold mb-6">
        🏨 Search Hotels
      </h2>

      <div className="grid md:grid-cols-5 gap-4">

        <input
          type="text"
          placeholder="Destination"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-xl p-4"
        />

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border rounded-xl p-4"
        />

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border rounded-xl p-4"
        />

        <select
          value={rooms}
          onChange={(e) => setRooms(Number(e.target.value))}
          className="border rounded-xl p-4"
        >
          <option value={1}>1 Room</option>
          <option value={2}>2 Rooms</option>
          <option value={3}>3 Rooms</option>
          <option value={4}>4 Rooms</option>
        </select>

        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="border rounded-xl p-4"
        >
          <option value={1}>1 Guest</option>
          <option value={2}>2 Guests</option>
          <option value={3}>3 Guests</option>
          <option value={4}>4 Guests</option>
          <option value={5}>5 Guests</option>
        </select>

      </div>

      <button
        onClick={searchHotel}
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
      >
        Search Hotels
      </button>

    </div>
  );
}

export default HotelSearch;