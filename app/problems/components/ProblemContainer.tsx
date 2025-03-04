"use client";
import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "@/components/context/FilterContext";
import { readProblemSummaries } from "@/backend/firebase/database";
import { useRouter } from "next/navigation";
import ProblemCard from "./ProblemCard";

interface Problem {
  id: string;
  name: string;
  difficulty: number;
}

const ProblemContainer: React.FC = () => {
  const { minDiff, maxDiff } = useContext(FilterContext);
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
    <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 mx-3 rounded-lg text-white overflow-x-auto no-scrollbar">
      <table className="w-full shadow-xl rounded-lg overflow-hidden">
        <thead className="bg-gray-600">
          <tr>
            <th className="text-xl p-4">ID</th>
            <th className="text-xl p-4">Name</th>
            <th className="text-xl p-4">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            if (minDiff == "" || maxDiff == "" || (Number(minDiff) <= problem.difficulty && problem.difficulty <= Number(maxDiff))) {
              return (
                <ProblemCard
                  key={problem.id}
                  id={problem.id}
                  name={problem.name}
                  difficulty={problem.difficulty}
                  onClick={() => handleProblemClick(problem.id)}
                />
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemContainer;
