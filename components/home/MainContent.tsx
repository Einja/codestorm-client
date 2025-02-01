import React from "react";
const MainContent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-40 text-center">
          Learning Made Simple
        </h1>

        <div className="flex items-center justify-between">
          {/*left*/}
          <div className="w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-4">
              Data Structures and Algorithms
            </h2>
            <p>
              Understand how to manipulate various data structures seamlessly
              through various free courses.
            </p>
          </div>
          {/*right*/}
          <div
            className="flex-shrink-0 bg-cyan-950 p-4 rounded-xl text-white"
            style={{ width: "40rem", height: "24rem" }}
          >
            <h2 className="text-4xl font-bold mb-10">
              Pretend this is a GIF or smth
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
