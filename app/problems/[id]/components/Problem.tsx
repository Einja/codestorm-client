"use client";
import React, { useState, useEffect } from "react";
import { readProblemSingular } from "@/backend/firebase/database/index";

interface ProblemProps {
  id: string;
}

interface ProblemAttributes {
  id: string;
  constraints: string;
  description: string;
  difficulty: number;
  examples: Map<string, string>;
  inputs: Array<string>;
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
      setProblems(data);
    };

    fetchProblem();
  }, []);

  if (!problem) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-full rounded-lg overflow-y-auto border border-gray-500 bg-[#343541] text-white">
      <div className="p-5 text-center">
        Problem {id}: {problem.name}
      </div>
      <div className="text-center">Runtime Limit: {problem.runtimeLimit}</div>
      <div className="text-center">Memory Limit: {problem.memoryLimit}</div>
      <div className="p-5">{problem.description}</div>
      <div className="p-5">
        {Array.from(problem.examples.entries()).map(([key, value], index) => (
          <div key={index} className="py-5">
            <div className="font-bold">Example {index + 1}:</div>
            <div className="px-5">Input: {key}</div>
            <div className="px-5">Output: {value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
