import React from "react";
import Image from "next/image";
import Link from "next/link";
const ExploreFeature: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl mb-8 text-center">Unlock Your Potential</h1>
      <div className="flex flex-col md:flex-row items-center justify-between h-96 mb-10 md:mb-0">
        <div className="md:w-1/2 py-10 text-center">
          <h2 className="text-4xl mb-4">Data Structures and Algorithms</h2>
          <p className="mb-4">
            Understand how to manipulate various data structures seamlessly
            through various free courses.
          </p>
          <Link
            href="/explore"
            scroll={false}
            className="absolute -translate-x-1/2 mt-8 bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            width={500}
            height={450}
            className="rounded-lg"
            unoptimized={true}
            src={"/images/graph.gif"}
            alt="DSA GIF"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreFeature;
