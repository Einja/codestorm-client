"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AuthModel from "../auth/AuthModel";
import { listenForAuthChanges } from "../../firebase/index";
import { User } from "firebase/auth";
const Hero: React.FC = () => {
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
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-left max-w-lg">
        <h1 className="text-6xl mb-4 text-center">CodeStorm</h1>
        <p className="text-2xl flex items-center text-center">
          The #1 modern day competitive programming and technical interview
          preparation platform.
        </p>
        <div className="flex justify-center">
          {!user && (
            <button
              className="mt-8 bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-600"
              onClick={handleLoginClick}
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <Image
          src="images/hierarchical.svg"
          alt="Coding topics flowchart"
          width={450}
          height={450}
          className="rounded-lg shadow-lg animate-swing shadow-none"
        />
      </div>
      {showLogin && (
        <AuthModel onClose={handleLoginClick} displayCreateAccount={false} />
      )}
    </div>
  );
};

export default Hero;
