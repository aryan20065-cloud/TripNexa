import { useState } from "react";
import Navbar from "../components/layout/Navbar";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.password || !form.confirmPassword) {
      alert("Please fill all details");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("tripnexaUser", form.name);
    alert("Account created successfully!");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-lg mx-auto pt-36 px-6">
        <form onSubmit={handleSignup} className="bg-white p-8 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Sign Up</h1>

          <input name="name" placeholder="Full Name" className="w-full p-4 border rounded-xl mb-4" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email Address" className="w-full p-4 border rounded-xl mb-4" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" className="w-full p-4 border rounded-xl mb-4" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" className="w-full p-4 border rounded-xl mb-4" onChange={handleChange} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" className="w-full p-4 border rounded-xl mb-6" onChange={handleChange} />

          <button className="w-full bg-cyan-500 text-slate-900 py-4 rounded-xl font-bold">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;