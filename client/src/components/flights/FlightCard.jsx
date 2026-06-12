<button
  disabled={!isPassengerDetailsValid}
  onClick={() => {
    if (!isPassengerDetailsValid) return;

    setShowModal(false);

    navigate("/payment", {
      state: {
        passengers,
        airline,
        flightNumber,
        from,
        to,
        fromAirport,
        fromCode,
        toAirport,
        toCode,
        time,
        duration,
        stops,
        travelClass,
        meal,
        baggage,
        totalAmount,
      },
    });
  }}
  className={`flex-1 py-3 rounded-xl font-bold ${
    isPassengerDetailsValid
      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Continue to Payment
</button>