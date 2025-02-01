import React from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
const Navbar: React.FC = () => {
  return (
    <nav className="p-4 font-bold">
      <div className="container m-auto flex justify-between items-center md:flex">
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/problems">Problems</Link>
          </li>
        </ul>

        <ul className="flex space-x-10">
          <Link href="/about">About</Link>
          <ToggleTheme />
          <button>Sign In</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
