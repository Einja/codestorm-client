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
    <div className="w-1/2 rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white mx-2 overflow-y-auto ">
      <div className="p-5 flex justify-center">Problem {id}: {problem.name}</div>
      <div className="p-5">{`${problem.description}`}</div>
    </div>
  );
};

export default Problem;
