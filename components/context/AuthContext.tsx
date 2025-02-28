"use client";
import { useState, createContext, useEffect } from "react";
import { User } from "firebase/auth";
import { listenForAuthChanges } from "@/backend/firebase/auth";

type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContext = createContext<User | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = listenForAuthChanges((user: User | null) => {
        setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
