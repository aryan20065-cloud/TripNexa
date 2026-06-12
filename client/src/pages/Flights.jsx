const filteredFlights = flights.filter((flight) => {
  if (!isSearchReady) return false;

  const matchRoute =
    flight.from.toLowerCase().includes(from.toLowerCase()) &&
    flight.to.toLowerCase().includes(to.toLowerCase());

  const matchDepartureDate = Boolean(selectedDeparture);

  const matchReturnDate =
    tripType !== "roundtrip" || Boolean(selectedReturnDate);

  const matchPrice = flight.price <= price;
  const matchAirline = airline === "All" || flight.airline === airline;
  const matchStops = stops === "All" || flight.stops === stops;

  return (
    matchRoute &&
    matchDepartureDate &&
    matchReturnDate &&
    matchPrice &&
    matchAirline &&
    matchStops
  );
});