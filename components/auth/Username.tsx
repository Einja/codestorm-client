"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { logout } from "@/backend/firebase/auth/index";

interface UsernameProps {
  username: string | null;
}

const Username: React.FC<UsernameProps> = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
      router.push('/');
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
    <div className="relative inline-block" ref={dropdownRef}>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        {<div className="hover:text-gray-300">{username}</div>}
      </button>
      {showDropdown && (
        <div
          className="absolute right-0 mt-2 w-32 rounded-lg py-1 shadow-xl z-10"
          style={{ backgroundColor: "var(--background-color2)", color: "var(--text-color)" }}
        >
          <a
            href={`/users/${username}`}
            className="block px-4 py-1 hover:text-gray-300"
          >
            Profile
          </a>
          <button
            onClick={handleLogout}
            className="block px-4 py-1 hover:text-gray-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Username;
