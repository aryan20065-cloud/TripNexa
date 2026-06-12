import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-5xl font-extrabold text-white flex items-center gap-2"
        >
          ✈ TripNexa
        </Link>

        {/* Menu */}

        <div className="hidden lg:flex gap-10 text-white font-bold text-xl">

          <Link to="/flights" className="hover:text-cyan-300">
            Flights
          </Link>

          <Link to="/hotels" className="hover:text-cyan-300">
            Hotels
          </Link>

          <Link to="/trains" className="hover:text-cyan-300">
            Trains
          </Link>

          <Link to="/bus" className="hover:text-cyan-300">
            Bus
          </Link>

          <Link to="/holidays" className="hover:text-cyan-300">
            Holidays
          </Link>

          <Link to="/visa" className="hover:text-cyan-300">
            Visa
          </Link>

          <Link to="/cruise" className="hover:text-cyan-300">
            Cruise
          </Link>

          <Link to="/insurance" className="hover:text-cyan-300">
            Insurance
          </Link>

          <Link to="/wishlist" className="hover:text-pink-400">
            ❤️ Wishlist
          </Link>

          <Link to="/mytrips" className="hover:text-cyan-300">
            🧳 My Trips
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            to="/signin"
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="bg-cyan-400 text-slate-900 font-bold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Sign Up
          </Link>

          <select
            className="bg-white rounded-full px-5 py-3 font-bold outline-none cursor-pointer"
            onChange={(e) => {
              localStorage.setItem("currency", e.target.value);
              window.location.reload();
            }}
            defaultValue={localStorage.getItem("currency") || "INR"}
          >
            <option value="INR">🇮🇳 INR</option>
            <option value="USD">🇺🇸 USD</option>
            <option value="EUR">🇪🇺 EUR</option>
            <option value="AED">🇦🇪 AED</option>
          </select>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;