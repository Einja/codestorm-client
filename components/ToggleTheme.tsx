"use client";
import React, { useEffect, useState } from "react";

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Change Theme</button>;
};

export default ToggleTheme;
