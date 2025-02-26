"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { listenForAuthChanges } from "@/backend/firebase/auth/index";
import { User } from "firebase/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = listenForAuthChanges((user: User | null) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // boolean that is true/false based on whether user is on problems page or not.
  const pathname = usePathname();
  const [notAtProblems, setAtProblems] = useState<boolean>(true);
  useEffect(() => {
    setAtProblems(
      !(pathname.startsWith("/problems/") && pathname !== "/problems")
    );
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center text-6xl">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
        <Navbar />
        {notAtProblems ? <main className="container mx-auto mt-8 mb-8">{children}</main> : <main className="h-screen">{children}</main>}
        {notAtProblems && <Footer />}
    </>
  );
};

export default LoadingWrapper;
