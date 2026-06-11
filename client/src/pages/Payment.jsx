import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-36 pb-20 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold mb-8 text-center">
            💳 Secure Payment
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["upi", "card", "netbanking", "wallet"].map((item) => (
              <button
                key={item}
                onClick={() => setMethod(item)}
                className={`px-6 py-3 rounded-full font-bold ${
                  method === item
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {item === "upi" && "📱 UPI"}
                {item === "card" && "💳 Card"}
                {item === "netbanking" && "🏦 Net Banking"}
                {item === "wallet" && "👛 Wallet"}
              </button>
            ))}
          </div>

          {method === "upi" && (
            <div className="space-y-4">
              <input
                className="w-full p-4 border rounded-xl"
                placeholder="Enter UPI ID"
              />
              <div className="grid md:grid-cols-4 gap-4">
                {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                  <button className="bg-slate-100 p-4 rounded-xl font-bold">
                    {app}
                  </button>
                ))}
              </div>
            </div>
          )}

          {method === "card" && (
            <div className="space-y-5">
              <input className="w-full p-4 border rounded-xl" placeholder="Card Holder Name" />
              <input className="w-full p-4 border rounded-xl" placeholder="Card Number" />
              <div className="grid grid-cols-2 gap-4">
                <input className="p-4 border rounded-xl" placeholder="MM/YY" />
                <input className="p-4 border rounded-xl" placeholder="CVV" />
              </div>
            </div>
          )}

          {method === "netbanking" && (
            <div className="grid md:grid-cols-3 gap-4">
              {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Canara"].map((bank) => (
                <button className="bg-slate-100 p-4 rounded-xl font-bold">
                  {bank}
                </button>
              ))}
            </div>
          )}

          {method === "wallet" && (
            <div className="grid md:grid-cols-3 gap-4">
              {["Paytm Wallet", "Amazon Pay", "Mobikwik", "Freecharge"].map((wallet) => (
                <button className="bg-slate-100 p-4 rounded-xl font-bold">
                  {wallet}
                </button>
              ))}
            </div>
          )}

          <button
            onClick={() => navigate("/booking-success")}
            className="mt-10 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-xl font-bold hover:scale-105 transition"
          >
            Pay & Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;