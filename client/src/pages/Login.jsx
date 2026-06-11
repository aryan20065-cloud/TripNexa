import Navbar from "../components/layout/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

      <Navbar />

      <div className="flex justify-center items-center h-[85vh]">

        <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

          <h2 className="text-4xl font-bold text-center mb-8">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl mb-5 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-xl mb-6 outline-none"
          />

          <button className="w-full bg-blue-600 text-white p-4 rounded-xl text-xl font-semibold hover:bg-blue-700 transition">

            Login

          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;