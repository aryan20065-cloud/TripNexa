import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { formatPrice } from "../utils/currency";

function HotelBookingSuccess() {
  const { state } = useLocation();

  const bookingId = `HTL-${Math.floor(Math.random() * 90000 + 10000)}`;

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
            <p><b>Guest:</b> {state?.guestName}</p>
            <p><b>Phone:</b> {state?.phone}</p>
            <p><b>Room:</b> {state?.roomType}</p>
            <p><b>Rooms:</b> {state?.rooms}</p>
            <p><b>Guests:</b> {state?.guests}</p>
            <p><b>Total Paid:</b> {formatPrice(state?.total || 0)}</p>
            <p><b>Status:</b> Confirmed ✅</p>
          </div>

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