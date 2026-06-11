import { motion } from "framer-motion";
import { FaPlane, FaHotel, FaTrain, FaBus } from "react-icons/fa";

const offers = [
  {
    icon: <FaPlane size={32} />,
    title: "Flight Sale",
    discount: "Up to 25% OFF",
  },
  {
    icon: <FaHotel size={32} />,
    title: "Luxury Hotels",
    discount: "Save ₹3000",
  },
  {
    icon: <FaTrain size={32} />,
    title: "Train Booking",
    discount: "Instant Confirm",
  },
  {
    icon: <FaBus size={32} />,
    title: "Bus Deals",
    discount: "Flat ₹500 OFF",
  },
];

function TrendingOffers() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          🔥 Trending Offers
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {offers.map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl"
            >
              <div className="mb-6">{offer.icon}</div>

              <h3 className="text-2xl font-bold">
                {offer.title}
              </h3>

              <p className="mt-4 text-lg">
                {offer.discount}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrendingOffers;