"use client";
import React, { useState } from "react";
import { signUp } from "@/backend/firebase/auth/index";
interface CreateAccountProps {
  switchAuthDisplay: () => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ switchAuthDisplay }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(username, email, password);
      window.location.reload();
    } catch (error) {
      if (error instanceof Error) {
        setError(`Failed to create an account: ${error.message}`);
      } else {
        setError(`unknown error occurred.`);
      }
    }
  };
  return (
    <div className="text-gray-700">
      <h2 className="text-xl mb-4 text-center">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="block text-sm mb-2">Email</p>
          <input
            className="font-normal shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          />
        </div>
        <div className="mb-6">
          <p className="block text-sm mb-2">Username</p>
          <input
            className="font-normal shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          />
        </div>
        <div className="mb-6">
          <p className="block text-sm mb-2">Password</p>
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
            Register
          </button>
        </div>
        <div className="flex items-center justify-center py-4 mt-3">
          <button type="button" onClick={switchAuthDisplay}>
            Already a user? Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
