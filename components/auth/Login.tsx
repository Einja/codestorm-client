"use client";
import React, { useState } from "react";
import { login } from "../../firebase/index";

interface LoginProps {
  switchAuthDisplay: () => void;
}

const Login: React.FC<LoginProps> = ({ switchAuthDisplay }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      window.location.reload();
    } catch (error) {
      if (error instanceof Error) {
        setError("Failed to login. Incorrect email/password.");
      } else {
        setError(`unknown error occurred.`);
      }
    }
  };
  return (
    <div className="text-gray-700">
      <h2 className="text-xl font-bold mb-4 text-center">Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="block text-sm font-bold mb-2">Email</p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          />
        </div>
        <div className="mb-6">
          <p className="block text-sm font-bold mb-2">Password</p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 focus:outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 transition-colors duration-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-center py-4 mt-3">
          <button type="button">Forgot Password?</button>
        </div>
        <div className="flex items-center justify-center">
          <button type="button" onClick={switchAuthDisplay}>
            New User? Create an Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
