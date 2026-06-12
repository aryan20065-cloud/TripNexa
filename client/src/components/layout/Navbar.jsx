import { Link } from "react-router-dom";

function Navbar() {
  const handleCurrencyChange = (e) => {
    localStorage.setItem("currency", e.target.value);
    window.dispatchEvent(new Event("currencyChange"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white flex items-center gap-2"
        >
          ✈ TripNexa
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-white font-semibold text-base">
          <Link to="/flights">Flights</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/trains">Trains</Link>
          <Link to="/bus">Bus</Link>
          <Link to="/holidays">Holidays</Link>
          <Link to="/visa">Visa</Link>
          <Link to="/cruise">Cruise</Link>
          <Link to="/insurance">Insurance</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/mytrips">My Trips</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/signin"
            className="bg-white text-blue-700 font-bold px-5 py-2 rounded-full hover:bg-blue-100 transition text-sm"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="bg-cyan-400 text-slate-900 font-bold px-5 py-2 rounded-full hover:scale-105 transition text-sm"
          >
            Sign Up
          </Link>

          <select
            className="bg-white rounded-full px-4 py-2 font-bold outline-none cursor-pointer text-sm"
            defaultValue={localStorage.getItem("currency") || "INR"}
            onChange={handleCurrencyChange}
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