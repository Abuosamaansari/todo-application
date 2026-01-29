// src/pages/Login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // ✅ Get registered user from localStorage
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      username === registeredUser.username &&
      password === registeredUser.password
    ) {
      // ✅ Save user + token in Redux
      dispatch(setUser({ user: registeredUser, token: registeredUser.token }));

      // ✅ Save token in localStorage
      localStorage.setItem("token", registeredUser.token);

      // Navigate to products page
      navigate("/products");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-3 w-full rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-semibold"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
