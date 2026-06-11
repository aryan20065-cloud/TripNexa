import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <Link
          to="/"
          className="text-4xl font-bold text-white hover:text-cyan-300 transition"
        >
          ✈ TripNexa
        </Link>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-7 text-white font-semibold">

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

          <Link to="/visa" className="hover:text-cyan-300 transition">
            Visa
          </Link>

          <Link to="/cruise" className="hover:text-cyan-300 transition">
            Cruise
          </Link>

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/wishlist"
            className="text-white hover:text-red-400 transition font-semibold"
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/mytrips"
            className="text-white hover:text-cyan-300 transition font-semibold"
          >
            🧳 My Trips
          </Link>

          <Link
            to="/signin"
            className="bg-white text-blue-700 px-5 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="bg-cyan-400 text-slate-900 px-5 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Sign Up
          </Link>

          <select className="bg-white rounded-full px-4 py-3 font-semibold outline-none cursor-pointer">

            <option>🇮🇳 INR</option>

            <option>🇺🇸 USD</option>

            <option>🇪🇺 EUR</option>

            <option>🇦🇪 AED</option>

          </select>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;