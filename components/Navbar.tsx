import React from "react";
import ToggleTheme from "./ToggleTheme";
const Navbar: React.FC = () => {
  return (
    <nav
      className="p-4 font-bold"
    >
      <div className="container m-auto flex justify-between items-center md:flex">
        <ul className="flex space-x-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/problems">Problems</a>
          </li>
        </ul>

        <ul className="flex space-x-10">
          <a href="/about">About</a>
          <ToggleTheme />
          <button>Sign In</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
