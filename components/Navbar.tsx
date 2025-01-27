import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-700 p-4 text-white font-bold">
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
          <a href="/contact">Contact</a>
          <button>Sign In</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;