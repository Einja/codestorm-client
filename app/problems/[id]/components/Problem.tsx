import React from "react";

interface ProblemProps {
  id: string;
}

const Problem: React.FC<ProblemProps> = ({ id }) => {
  return (
    <div className="w-1/2 rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white mx-2 overflow-y-auto ">
      <div className="p-5">Problem {id}</div>
    </div>
  );
};

export default Problem;
