import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "@/components/context/LanguageContext";
import { FaAngleDown } from "react-icons/fa6";

const LanguageDropdown: React.FC = () => {
  const {language, setLanguage} = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
  const handleLanguageToggle = (language: string) => {
    setLanguage(language);
    setShowDropdown(false);
  };
  return (
    <div>
      <button
        className="p-2 hover:bg-gray-600 rounded-lg transition-colors duration-200 transition:0.3s"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex items-start items-center gap-1">
          {language === "cpp" && "C++"} {language === "python" && "Python"}<FaAngleDown />
        </div>
      </button>
      {showDropdown && (
        <div
          className="absolute w-32 rounded-lg py-1 shadow-xl z-10 bg-gray-600"
          style={{ color: "var(--text-color)" }}
        >
          <button
            onClick={() => handleLanguageToggle("cpp")}
            className="block px-4 py-1 hover:text-gray-300"
          >
            C++
          </button>
          <button
            onClick={() => handleLanguageToggle("python")}
            className="block px-4 py-1 hover:text-gray-300"
          >
            Python
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
