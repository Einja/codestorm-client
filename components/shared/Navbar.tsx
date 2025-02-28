"use client";
import React, { useState, useContext } from "react";
import { UserContext } from "@/components/context/AuthContext";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Username from "../auth/Username";
import AuthModel from "../auth/AuthModel";
import { FaHouse, FaMagnifyingGlass, FaPencil, FaHeart } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const user = useContext(UserContext);
  const onSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav
      className="p-4 relative top-0 left-0 z-50 w-full"
      style={{
        backgroundColor: "var(--background-color2)",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div className="w-full px-4 flex justify-between items-center">
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
            <Link href="/support" className="hover:text-gray-300">
              {onSmallScreen ? <FaHeart /> : "Support"}
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
                  <button
                    onClick={handleLoginClick}
                    className="text-sm sm:text-base"
                  >
                    Sign In
                  </button>
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
