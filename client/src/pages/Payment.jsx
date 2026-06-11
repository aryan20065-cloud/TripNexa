import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-3xl mx-auto pt-36 pb-20 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-bold mb-8 text-center">
            💳 Secure Payment
          </h1>

          <div className="space-y-5">

            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Card Holder Name"
            />

            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Card Number"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                className="p-4 border rounded-xl"
                placeholder="MM/YY"
              />

              <input
                className="p-4 border rounded-xl"
                placeholder="CVV"
              />

            </div>

            <button
              onClick={() => navigate("/booking-success")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-xl font-bold hover:scale-105 transition"
            >
              Pay & Confirm Booking
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;