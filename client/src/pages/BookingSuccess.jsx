import Navbar from "../components/layout/Navbar";

function BookingSuccess() {
  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 pb-28">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">🎉 Booking Confirmed</h1>
          <p className="text-xl opacity-90">Your TripNexa e-ticket is ready</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 -mt-16 relative z-10">
        <h2 className="text-3xl font-bold mb-6">E-Ticket</h2>

        <div className="space-y-4 text-lg">
          <p><b>Booking ID:</b> TNX-{Math.floor(Math.random() * 90000 + 10000)}</p>
          <p><b>Status:</b> Confirmed</p>
          <p><b>Passenger:</b> Aryan Sharma</p>
          <p><b>Flight:</b> Delhi → Mumbai</p>
          <p><b>Class:</b> Economy</p>
        </div>

        <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
          Download Ticket
        </button>
      </div>
    </div>
  );
}

export default BookingSuccess;