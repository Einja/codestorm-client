import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-left max-w-lg">
        <h1 className="text-6xl font-bold mb-4 text-center">CodeStorm</h1>
        <p className="text-2xl font-bold flex items-center text-center">
          The #1 modern day competitive programming and technical interview
          preparation platform.
        </p>
        <div className="flex justify-center">
          <button className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-600">
            Create Account
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <Image
          src="images/hierarchical.svg"
          alt="Coding topics flowchart"
          width={450}
          height={450}
          className="rounded-lg shadow-lg animate-swing shadow-none"
        />
      </div>
    </div>
  );
};

export default Hero;
