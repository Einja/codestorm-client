import React from "react";
const MainContent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-6xl mb-40 text-center">
          Learning Made Simple
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/*left*/}
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl mb-4">
              Data Structures and Algorithms
            </h2>
            <p>
              Understand how to manipulate various data structures seamlessly
              through various free courses.
            </p>
          </div>
          {/*right*/}
          <div
            className="flex-shrink-0 bg-blue-700 p-4 rounded-xl text-white w-full md:w-auto"
            style={{ width: "40rem", height: "24rem" }}
          >
            <h2 className="text-4xl font-bold mb-10">
              DSA GIF HERE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
