import React from "react";

const Card: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-80 h-96 bg-cyan-950 p-4 rounded-xl text-white">
      <h2 className="text-4xl font-bold mb-10">Course Name</h2>
      <p className="overflow-auto break-words">
        Course Description
      </p>
    </div>
  );
};

export default Card;
