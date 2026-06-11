import Navbar from "../components/layout/Navbar";

function Hotels() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

      <Navbar />

      <div className="flex flex-col justify-center items-center h-[85vh] text-white">

        <div className="text-8xl mb-6">🏨</div>

        <h1 className="text-6xl font-bold mb-4">
          Hotels
        </h1>

        <p className="text-2xl opacity-80">
          Find Luxury Hotels at Best Prices
        </p>

      </div>

    </div>
  );
}

export default Hotels;