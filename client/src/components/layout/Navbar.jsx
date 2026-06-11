import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link to="/" className="text-3xl font-bold text-white">
          ✈ TripNexa
        </Link>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/flights" className="hover:text-cyan-300 transition">
            Flights
          </Link>

          <Link to="/hotels" className="hover:text-cyan-300 transition">
            Hotels
          </Link>

          <Link to="/trains" className="hover:text-cyan-300 transition">
            Trains
          </Link>

          <Link to="/bus" className="hover:text-cyan-300 transition">
            Bus
          </Link>

          <Link to="/holidays" className="hover:text-cyan-300 transition">
            Holidays
          </Link>
        </div>

        <Link
          to="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;