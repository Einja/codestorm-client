"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AuthModel from "../auth/AuthModel";
import { listenForAuthChanges } from "@/backend/firebase/auth/index";
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
    <div className="container mx-auto flex flex-col items-center justify-between">
      <div className="md:w-1/2 py-10 text-center">
        <h1 className="text-6xl md:text-8xl mb-4 tracking-[4px]">CodeStorm</h1>
        <p className="text-2xl">
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

      <div className="md:w-1/2 flex justify-center p-10">
        <Image
          src="/images/logo.png"
          alt="Coding topics flowchart"
          width={450}
          height={450}
          className="rounded-lg animate-swing"
        />
      </div>
      {showLogin && (
        <AuthModel onClose={handleLoginClick} displayCreateAccount={false} />
      )}
    </div>
  );
};

export default Hero;
