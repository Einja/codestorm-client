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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/problems">Problems</Link>
          </li>
        </ul>

        <ul className="flex space-x-10">
          <Link href="/about">About</Link>
          <ToggleTheme />
          <button onClick={handleLoginClick}>Sign In</button>
        </ul>
      </div>
      {showLogin && <AuthModel onClose={handleLoginClick} />}
    </nav>
  );
};

export default Navbar;
