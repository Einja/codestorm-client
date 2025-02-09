"use client";
import React, { useState } from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import AuthModel from "./auth/AuthModel";

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="p-4">
      <div className="container m-auto flex justify-between items-center md:flex">
        <ul className="flex space-x-10">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore" className="hover:text-gray-300">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/problems" className="hover:text-gray-300">
              Problems
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-10">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <div className="hover:text-gray-300">
            <ToggleTheme />
          </div>
          <div className="hover:text-gray-300">
            <button onClick={handleLoginClick}>Sign In</button>
          </div>
        </ul>
      </div>
      {showLogin && (
        <AuthModel onClose={handleLoginClick} displayCreateAccount={true} />
      )}
    </nav>
  );
};

export default Navbar;
