import React, { useEffect } from "react";
import ProblemDesc from "./ProblemDesc";
interface ProblemProps {
  problem: ProblemAttributes;
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

declare global {
  interface Window {
    MathJax: any;
  }
}

const Problem: React.FC<ProblemProps> = ({ problem }) => {
  useEffect(() => {
    setTimeout(() => {
      if (window.MathJax) {
        window.MathJax.typeset();
      }
    }, 0);
  }, []);
  return (
    <div>
      <div className="p-5 text-center">
        Problem {problem.id}: {problem.name}
      </div>
      <div className="text-center">Runtime Limit: {problem.runtimeLimit}</div>
      <div className="text-center">Memory Limit: {problem.memoryLimit}</div>
      <div className="p-5">
        <ProblemDesc desc={problem.description} />
      </div>
      <div className="p-5">
        {Array.from(problem.examples.entries()).map(([key, value], index) => (
          <div key={index} className="py-5">
            <div className="font-bold">Example {index + 1}:</div>
            <div className="px-5">Input: {key}</div>
            <div className="px-5">Output: {value}</div>
          </div>
        ))}
      </div>
      <div className="px-5 pt-5">Constraints:</div>
      <div className="px-5">{problem.constraints}</div>
      <div className="px-5 pt-5">Tags:</div>
      <div className="px-5 pt-2">
        {problem.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 px-3 py-1 text-sm font-semibold mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Problem;
