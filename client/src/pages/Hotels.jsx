import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import HotelSearch from "../components/hotels/HotelSearch";
import HotelFilter from "../components/hotels/HotelFilter";
import HotelCard from "../components/hotels/HotelCard";
import hotels from "../data/hotels";

function Hotels() {
  const [searchData, setSearchData] = useState(null);
  const [price, setPrice] = useState(50000);
  const [rating, setRating] = useState(0);
  const [star, setStar] = useState(0);

  const filteredHotels = hotels.filter((hotel) => {
    const cityMatch =
      !searchData?.city ||
      hotel.city.toLowerCase().includes(searchData.city.toLowerCase()) ||
      hotel.name.toLowerCase().includes(searchData.city.toLowerCase());

    return (
      cityMatch &&
      hotel.price <= price &&
      hotel.rating >= rating &&
      hotel.rating >= star
    );
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 pb-28">
        <Navbar />

        <div className="pt-36 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">🏨 Book Hotels</h1>
          <p className="text-xl opacity-90">
            Luxury Hotels • Resorts • Budget Stays
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <HotelSearch onSearch={setSearchData} />
      </div>

      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <HotelFilter
              price={price}
              setPrice={setPrice}
              rating={rating}
              setRating={setRating}
              star={star}
              setStar={setStar}
            />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold mb-8">
              {searchData ? "Available Hotels" : "Popular Hotels"}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))
              ) : (
                <div className="bg-white rounded-3xl shadow-xl p-10 text-center md:col-span-2">
                  <h3 className="text-3xl font-bold text-slate-800">
                    No hotels found
                  </h3>
                  <p className="text-slate-500 mt-3">
                    Try changing city, price or rating filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hotels;