function Offers() {
  const offers = [
    { title: "Flat 20% Off Flights", desc: "Use code FLYNEXA", tag: "Flights" },
    { title: "Hotel Deals", desc: "Save up to ₹3,000", tag: "Hotels" },
    { title: "Weekend Trips", desc: "Goa packages from ₹4,999", tag: "Holidays" },
  ];

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-14 text-slate-900">
          Special Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl hover:scale-105 transition"
            >
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {offer.tag}
              </span>

              <h3 className="text-3xl font-bold mt-8 mb-4">
                {offer.title}
              </h3>

              <p className="text-lg opacity-90">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;