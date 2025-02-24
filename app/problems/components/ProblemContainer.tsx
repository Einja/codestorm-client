"use client";
import React, { useState, useEffect } from "react";
import { readProblemSummaries } from "../../../firebase/index";
import { useRouter } from "next/navigation";
import ProblemCard from "./ProblemCard";

interface Problem {
  id: string;
  name: string;
  difficulty: number;
}

const ProblemContainer: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const router = useRouter();
  const handleProblemClick = (id: string): void => {
    router.push(`/problems/${id}`);
  };

  useEffect(() => {
    const fetchProblemSummaries = async () => {
      const data = await readProblemSummaries();
      setProblems(data);
    };

    fetchProblemSummaries();
  }, []);
  return (
    <div className="bg-gray-500 p-6 mx-3 rounded-lg text-white overflow-x-auto no-scrollbar">
      <table className="w-full shadow-xl rounded-lg overflow-hidden">
        <thead className="bg-gray-600">
          <tr>
            <th className="text-xl p-4">ID</th>
            <th className="text-xl p-4">Name</th>
            <th className="text-xl p-4">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              id={problem.id}
              name={problem.name}
              difficulty={problem.difficulty}
              onClick={() => handleProblemClick(problem.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemContainer;
