import React from "react";
const MainContent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-center">
          Learning Made Simple
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between h-96">
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
            className="flex justify-center items-center bg-blue-700 p-4 rounded-xl text-white w-1/2 h-3/4"
          >
            <h2 className="flex text-4xl font-bold mb-10">
              DSA GIF HERE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
