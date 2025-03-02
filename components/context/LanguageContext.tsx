"use client";
import { useState, createContext } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lan: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({language: "cpp", setLanguage: () => {}});

type LanguageContextProviderType = {
  children: React.ReactNode;
};

export const LanguageContextProvider = ({ children }: LanguageContextProviderType) => {
  const [language, setLanguage] = useState("cpp");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
