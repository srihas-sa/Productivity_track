import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    // email.trim();
    //password.trim();
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      console.log(res.data);
      const User_detals=res.data;

      if(res.data.email===email){
        localStorage.setItem("token", res.data.token);
        setLoggedIn(true);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6">Welcome, {email}!</h2>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 rounded-lg shadow hover:bg-red-700 transition-all"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 cursor-pointer text-gray-400 hover:text-white"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-500 transition-all"
        >
          Login
        </button>

        <div className="mt-4 text-gray-400 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-400 hover:underline" onClick={() => navigate("/signup")}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
