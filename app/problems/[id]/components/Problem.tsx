"use client";
import React, { useState, useEffect } from "react";
import { readProblemSingular } from "../../../../firebase/index";

interface ProblemProps {
  id: string;
}

interface ProblemAttributes {
  id: string;
  constraints: string;
  description: string;
  difficulty: number;
  examples: Map<string, string>;
  inputs: Map<string, string>;
  memoryLimit: string;
  name: string;
  output: string;
  runtimeLimit: string;
  tags: Array<string>;
}
const Problem: React.FC<ProblemProps> = ({ id }) => {
  const [problem, setProblems] = useState<ProblemAttributes>();
  useEffect(() => {
    const fetchProblem = async () => {
      const data = await readProblemSingular(id);
      console.log(data);
      setProblems(data);
    };

    fetchProblem();
  }, []);



  if (!problem) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen rounded-lg overflow-hidden border border-gray-500 bg-[#343541] text-white mx-2">
      <div className="p-5 text-center">
        Problem {id}: {problem.name}
      </div>
      <div className="text-center">
        Runtime Limit: {problem.runtimeLimit}
      </div>
      <div className="text-center">
        Memory Limit: {problem.memoryLimit}
      </div>
      <div className="p-5">{problem.description}</div>
    </div>
  );
};

export default Problem;
