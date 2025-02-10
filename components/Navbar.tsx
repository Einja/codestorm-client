"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Username from "./auth/Username";
import AuthModel from "./auth/AuthModel";
import { listenForAuthChanges } from "../firebase/index";
import { User } from "firebase/auth";
const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = listenForAuthChanges((user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
            {user ? (
              <Username username={user.displayName}/>
            ) : (
              <button onClick={handleLoginClick}>Sign In</button>
            )}
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
