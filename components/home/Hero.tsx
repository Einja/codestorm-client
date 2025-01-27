import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-left max-w-lg">
        <h1 className="text-6xl font-bold text-white mb-4 text-center">
          Mini-LeetCode
        </h1>
        <p className="text-2xl font-bold text-white flex items-center text-center">
          The #1 modern day competitive programming and technical interview
          preparation platform.
        </p>
        <div className="flex justify-center">
          <button className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-700">
            Create Account
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="images/hierarchical.png"
          alt="Coding topics flowchart"
          width={450}
          height={450}
          className="rounded-lg shadow-lg animate-swing"
        />
      </div>
    </div>
  );
};

export default Hero;
