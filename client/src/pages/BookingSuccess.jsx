import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { formatPrice } from "../utils/currency";

function HotelBookingSuccess() {
  const { state } = useLocation();

  const bookingId = `HTL-${Math.floor(Math.random() * 90000 + 10000)}`;
  const guestsList = state?.guestsList || [];

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-36 px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-bold text-center mb-6">
            🎉 Hotel Booking Confirmed
          </h1>

          <div className="space-y-3 text-lg">
            <p><b>Booking ID:</b> {bookingId}</p>
            <p><b>Hotel:</b> {state?.hotelName}</p>
            <p><b>City:</b> {state?.city}</p>
            <p><b>Phone:</b> {state?.phone}</p>
            <p><b>Email:</b> {state?.email}</p>
            <p><b>Room:</b> {state?.roomType}</p>
            <p><b>Rooms:</b> {state?.rooms}</p>
            <p><b>Guests Selected:</b> {state?.guests}</p>
            <p><b>Total Paid:</b> {formatPrice(state?.total || 0)}</p>
            <p><b>Status:</b> Confirmed ✅</p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Guest Details</h2>

            {guestsList.map((guest, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-2xl p-5 mb-4"
              >
                <p className="font-bold text-xl">Guest {index + 1}</p>
                <p>Name: {guest.name}</p>
                <p>Age: {guest.age}</p>
              </div>
            ))}
          </div>

          {state?.specialRequest && (
            <div className="mt-6 bg-yellow-50 p-5 rounded-2xl">
              <p><b>Special Request:</b> {state.specialRequest}</p>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold"
            >
              Download / Print Voucher
            </button>

            <Link
              to="/hotels"
              className="flex-1 text-center bg-gray-200 py-4 rounded-xl font-bold"
            >
              Back to Hotels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelBookingSuccess;