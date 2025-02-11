"use client";
import React, { useState, useEffect } from "react";
import { listenForAuthChanges } from "../../firebase/index";
import { User } from "firebase/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenForAuthChanges((user: User | null) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex h-screen justify-center items-center text-6xl"><p>Loading...</p></div>;
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-8 mb-8">{children}</main>
      <Footer />
    </>
  );
};

export default LoadingWrapper;