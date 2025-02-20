"use client";
import React, { useState, useEffect, useRef } from "react";
import { readProblemSingular } from "../../../../firebase/index";
import katex from "katex";
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
  const runtimeLimitRef = useRef<HTMLSpanElement>(null);
  const memoryLimitRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const fetchProblem = async () => {
      const data = await readProblemSingular(id);
      console.log(data);
      setProblems(data);
    };

    fetchProblem();
  }, []);

  useEffect(() => {
    if (problem && memoryLimitRef.current && runtimeLimitRef.current) {
      katex.render(problem.memoryLimit, memoryLimitRef.current);
      katex.render(problem.memoryLimit, runtimeLimitRef.current);
    }
  }, [problem]);


  if (!problem) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-1/2 rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white mx-2 overflow-y-auto ">
      <div className="p-5 flex justify-center">
        Problem {id}: {problem.name}
      </div>
      <div className="flex justify-center">
        Runtime Limit: <span ref={runtimeLimitRef} className="ml-2"></span>
      </div>
      <div className="flex justify-center">
        Memory Limit: <span ref={memoryLimitRef} className="ml-2"></span>
      </div>
      <div className="p-5">{problem.description}</div>
    </div>
  );
};

export default Problem;
