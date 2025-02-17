import React from "react";
import Image from "next/image";
import Link from "next/link";
const MainContent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-center">Learning Made Simple</h1>
        <div className="flex flex-col md:flex-row items-center justify-between h-96">
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl mb-4">Data Structures and Algorithms</h2>
            <p className="mb-4">
              Understand how to manipulate various data structures seamlessly
              through various free courses.
            </p>
            <Link
              href="/explore"
              scroll={false}
              className="mt-8 bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-600"
            >
              Get Started
            </Link>
          </div>

          <div className="flex justify-center items-center p-4 rounded-xl text-white w-1/2 h-3/4">
            <Image
              width={500}
              height={450}
              className="rounded-lg"
              src={"/images/graph.gif"}
              alt="DSA GIF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
