import { useState } from "react";
import Navbar from "../components/layout/Navbar";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("tripnexaUser", email);
    alert("Login successful!");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-md mx-auto pt-36 px-6">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Sign In</h1>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-xl mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;