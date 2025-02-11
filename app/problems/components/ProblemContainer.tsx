"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ProblemCard from "./ProblemCard";

const ProblemContainer: React.FC = () => {
  const router = useRouter();
  const handleProblemClick = (id: string): void => {
    router.push(`/problems/${id}`);
  };
  return (
    <div className="bg-gray-500 p-6 mx-3 rounded-md text-white overflow-x-auto no-scrollbar">
      <table className="w-full bg-black shadow-md">
        <thead className="bg-gray-600">
          <tr>
            <th className="text-xl p-4">ID</th>
            <th className="text-xl p-4">Name</th>
            <th className="text-xl p-4">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          <ProblemCard
            id={"1A"}
            name={"watermelon"}
            difficulty={500}
            onClick={() => handleProblemClick("1A")}
          />
          <ProblemCard
            id={"2A"}
            name={"Two Sum"}
            difficulty={800}
            onClick={() => handleProblemClick("2A")}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ProblemContainer;
