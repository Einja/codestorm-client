"use client";
import React, { useState, useEffect, useRef } from "react";
import { logout } from "../../firebase/index";

interface UsernameProps {
  username: string | null;
}

const Username: React.FC<UsernameProps> = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error("Logout failed.");
    }
  };

  // clicking outside of the dropdown will close it. did a click occur outside of component?
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  // detects clicks outside of component.
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {username}
      </button>
      {showDropdown && (
        <div className="absolute mt-2 w-48 bg-black rounded-lg py-1 shadow-xl">
          <a href="#" className="block px-4 py-1">Account Details</a>
          <button onClick={handleLogout} className="block px-4 py-1">Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Username;
