import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function BookingSuccess() {
  const { state } = useLocation();

  const passengers = state?.passengers || [];
  const bookingId = `TNX-${Math.floor(Math.random() * 90000 + 10000)}`;

  const downloadTicket = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 pb-28">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">🎉 Booking Confirmed</h1>
          <p className="text-xl opacity-90">Your TripNexa e-ticket is ready</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 -mt-16 relative z-10">
        <h2 className="text-4xl font-bold mb-6">E-Ticket</h2>

        <div className="space-y-3 text-lg">
          <p><b>Booking ID:</b> {bookingId}</p>
          <p><b>Status:</b> Confirmed</p>
          <p><b>Flight No:</b> {state?.flightNumber}</p>
          <p><b>Airline:</b> {state?.airline}</p>
          <p><b>Route:</b> {state?.from} → {state?.to}</p>
          <p><b>Departure Airport:</b> {state?.fromAirport} ({state?.fromCode})</p>
          <p><b>Arrival Airport:</b> {state?.toAirport} ({state?.toCode})</p>
          <p><b>Time:</b> {state?.time}</p>
          <p><b>Duration:</b> {state?.duration}</p>
          <p><b>Class:</b> {state?.travelClass}</p>
          <p><b>Meal:</b> {state?.meal}</p>
          <p><b>Baggage:</b> {state?.baggage}</p>
          <p><b>Total Paid:</b> ₹{Number(state?.totalAmount || 0).toLocaleString()}</p>
          <p><b>Payment:</b> Paid</p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-4">Passengers</h3>

          {passengers.length > 0 ? (
            passengers.map((passenger, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-2xl p-5 mb-4"
              >
                <p className="font-bold text-xl">Passenger {index + 1}</p>
                <p>Name: {passenger.name}</p>
                <p>Age: {passenger.age}</p>
                <p>Seat: {passenger.seat}</p>
              </div>
            ))
          ) : (
            <p>No passenger details found.</p>
          )}
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={downloadTicket}
            className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            Download / Print Ticket
          </button>

          <Link
            to="/"
            className="flex-1 text-center bg-gray-200 py-4 rounded-xl font-bold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccess;