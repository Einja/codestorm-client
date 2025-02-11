"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaMoon, FaSun } from "react-icons/fa6";
const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const onSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (

    <button onClick={toggleTheme}>
      {onSmallScreen ? (
        theme === "dark" ? <FaMoon /> : <FaSun/>
      ) : (
        "Change Theme"
      )}
      </button>
  );
};

export default ToggleTheme;
