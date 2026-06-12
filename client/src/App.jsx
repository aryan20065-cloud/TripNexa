import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Trains from "./pages/Trains";
import Bus from "./pages/Bus";
import Holidays from "./pages/Holidays";
import Login from "./pages/Login";
import BookingSuccess from "./pages/BookingSuccess";
import Payment from "./pages/Payment";
import FlightTracker from "./pages/FlightTracker";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/holidays" element={<Holidays />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/flight-tracker" element={<FlightTracker />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;