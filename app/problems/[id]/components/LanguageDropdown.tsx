import React from "react";
import { FaAngleDown } from "react-icons/fa6";
const LanguageDropdown: React.FC = () => {
  return (
    <button className="p-2 hover:bg-gray-600 rounded-lg transition-colors duration-200 transition:0.3s">
      <div className="flex items-start items-center">
        C++ <FaAngleDown />
      </div>
    </button>
  );
};

export default LanguageDropdown;
