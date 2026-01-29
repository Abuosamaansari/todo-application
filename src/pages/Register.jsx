// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      alert("Username and Password required");
      return;
    }

    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok || data.id) {
        alert("Registration successful!");
        navigate("/login"); // redirect to login page
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        <input
          type="text"
          placeholder="First Name"
          className="border p-2 mb-2 w-full rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="border p-2 mb-2 w-full rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-2 w-full rounded"
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
          onClick={handleRegister}
          className="bg-green-500 text-white py-2 rounded w-full hover:bg-green-600 transition"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-semibold"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
