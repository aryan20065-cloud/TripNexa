function AirlineFilter({ airline, setAirline }) {
  const airlines = [
    "All",
    "IndiGo",
    "Air India",
    "Vistara",
    "Akasa Air",
    "Emirates",
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">✈ Airlines</h3>

      <select
        value={airline}
        onChange={(e) => setAirline(e.target.value)}
        className="w-full p-3 border rounded-xl"
      >
        {airlines.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default AirlineFilter;