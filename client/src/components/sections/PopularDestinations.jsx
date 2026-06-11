function PopularDestinations() {
  const places = [
    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      price: "From ₹4,999",
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      price: "From ₹9,999",
    },
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      price: "From ₹14,999",
    },
    {
      name: "Singapore",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
      price: "From ₹12,999",
    },
  ];

  return (
    <section className="bg-slate-50 py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Popular Destinations
</h2>

        <div className="grid md:grid-cols-4 gap-8">

          {places.map((place) => (
            <div
              key={place.name}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  {place.name}
                </h3>

                <p className="text-gray-500 mb-4">
                  ⭐ 4.8 Rating
                </p>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-full w-full">
                  {place.price}
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;