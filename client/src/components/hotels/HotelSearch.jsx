import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HotelSearch() {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const searchHotels = () => {
    if (!city || !checkIn || !checkOut) {
      alert("Please fill all details");
      return;
    }

    navigate(
      `/hotels?city=${city}&checkin=${checkIn}&checkout=${checkOut}&rooms=${rooms}&guests=${guests}`
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

      <div className="grid lg:grid-cols-5 gap-5">

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-2xl p-4"
        >
          <option value="">Select City</option>

          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Goa</option>
          <option>Dubai</option>
          <option>Singapore</option>
          <option>London</option>

        </select>

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border rounded-2xl p-4"
        />

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border rounded-2xl p-4"
        />

        <select
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="border rounded-2xl p-4"
        >
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4 Rooms</option>
        </select>

        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border rounded-2xl p-4"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>

      </div>

      <div className="text-center mt-8">

        <button
          onClick={searchHotels}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold"
        >
          Search Hotels
        </button>

      </div>

    </div>
  );
}

export default HotelSearch;