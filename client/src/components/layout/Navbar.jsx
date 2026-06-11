function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="text-3xl font-bold text-white">
          ✈ TripNexa
        </div>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-cyan-300 transition">
            Flights
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            Hotels
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            Trains
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            Bus
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            Holidays
          </a>
        </div>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;