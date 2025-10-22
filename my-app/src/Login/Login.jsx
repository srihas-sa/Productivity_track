import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/practice";
import api from "./api"; // import configured axios instance

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { email, password});
      if (res.status === 200) {
        const { accessToken } = res.data;
        dispatch(setCredentials({ token: accessToken }));
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
            placeholder="Enter your password"
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
          className="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white font-semibold hover:from-indigo-600 hover:to-purple-500 transition-all"
        >
          Login
        </button>
         {/* Sign Up Button */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
