"use client";
import React, { useState } from "react";
import { logout } from "../../firebase/index";
import { spawn } from "child_process";

interface UsernameProps {
  username: string | null;
}

const Username: React.FC<UsernameProps> = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error("Logout failed.");
    }
  };
  return (
    <div className="">
      <span
        className="cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {username}
      </span>
      {showDropdown && 
       <div className="mt-2 w-32 border absolute rounded p-2 flex justify-center"
       onClick={handleLogout}>
            <button>Sign Out</button>
       </div>
      }
    </div>
  );
};

export default Username;
