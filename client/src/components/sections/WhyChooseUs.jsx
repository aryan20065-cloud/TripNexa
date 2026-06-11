import { FaRobot, FaShieldAlt, FaWallet, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Smart Planning",
    text: "Generate complete travel plans in seconds."
  },
  {
    icon: <FaWallet size={40} />,
    title: "Best Price Guarantee",
    text: "Find the lowest prices across platforms."
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Secure Payments",
    text: "100% encrypted and trusted transactions."
  },
  {
    icon: <FaHeadset size={40} />,
    title: "24/7 Support",
    text: "Travel experts available anytime."
  }
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose TripNexa?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:scale-105 transition"
            >
              <div className="flex justify-center mb-6 text-cyan-400">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="opacity-80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;