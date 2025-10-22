import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Replace with your backend signup API
      const response = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
        role: "ROLE_USER",
        permissions: [
  { permissionName: "Read" }
]

      });
      console.log(response.data.data);
      if (response.data === "User added successfully") {
        alert("Account created successfully!");
        localStorage.setItem("email",email);
        //setLoggedIn(true);  
        navigate("/login");
      } else {
        alert(`Try giving different email`);
      }
    } catch (err) {
      alert("Server error. Please try later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="mb-4 relative">
          <label className="block text-gray-300 mb-1">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={handleSignUp}
          className="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-500 transition-all"
        >
          Sign Up
        </button>

        <div className="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-400 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
}
