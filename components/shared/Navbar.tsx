"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Username from "../auth/Username";
import AuthModel from "../auth/AuthModel";
import { listenForAuthChanges } from "../../firebase/index";
import { User } from "firebase/auth";
import {
  FaHouse,
  FaMagnifyingGlass,
  FaPencil,
  FaQuestion,
} from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const onSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

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
    <nav
      className="p-4 relative"
      style={{
        backgroundColor: "var(--background-color2)",
        transition: "background-color 0.3s, color 0.3s",
        zIndex: 5,
      }}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-300">
              {onSmallScreen ? <FaHouse /> : "Home"}
            </Link>
          </li>
          <li>
            <Link href="/explore" className="hover:text-gray-300">
              {onSmallScreen ? <FaMagnifyingGlass /> : "Explore"}
            </Link>
          </li>
          <li>
            <Link href="/problems" className="hover:text-gray-300">
              {onSmallScreen ? <FaPencil /> : "Problems"}
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-8 items-center">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              {onSmallScreen ? <FaQuestion /> : "About"}
            </Link>
          </li>
          <li>
            <div className="hover:text-gray-300">
              <ToggleTheme />
            </div>
          </li>
          <li>
            <div>
              {user ? (
                <Username username={user.displayName} />
              ) : (
                <div className="hover:text-gray-300">
                  <button onClick={handleLoginClick} className="text-sm sm:text-base">Sign In</button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
      {showLogin && (
        <AuthModel onClose={handleLoginClick} displayCreateAccount={true} />
      )}
    </nav>
  );
};

export default Navbar;
