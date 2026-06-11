import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/20">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-10 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-bold text-white hover:text-cyan-300 transition whitespace-nowrap"
        >
          ✈ TripNexa
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-white font-semibold whitespace-nowrap">

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
        <div className="hidden lg:flex items-center whitespace-nowrap gap-8">

          <Link
            to="/wishlist"
            className="flex items-center gap-2 text-white font-semibold hover:text-red-400 transition"
          >
            <span className="text-xl">❤️</span>
            <span>Wishlist</span>
          </Link>

          <Link
            to="/mytrips"
            className="flex items-center gap-2 text-white font-semibold hover:text-cyan-300 transition"
          >
            <span className="text-xl">🧳</span>
            <span>My Trips</span>
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