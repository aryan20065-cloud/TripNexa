import Navbar from "../components/layout/Navbar";
import SearchBox from "../components/search/SearchBox";
import TrendingOffers from "../components/sections/TrendingOffers";
import PopularDestinations from "../components/sections/PopularDestinations";
import Offers from "../components/sections/Offers";
import AIPlanner from "../components/sections/AIPlanner";
import WhyChooseUs from "../components/sections/WhyChooseUs";

function Home() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-[85vh] pt-32">

          <div className="text-center text-white">

            <h1 className="text-7xl font-bold mb-6">
              Explore the World
            </h1>

            <p className="text-2xl opacity-90 mb-10">
              AI Powered Travel Platform
            </p>

            <SearchBox />

          </div>

        </div>

      </section>

      <TrendingOffers />

      <PopularDestinations />

      <Offers />

      <AIPlanner />

      <WhyChooseUs />

    </>
  );
}

export default Home;