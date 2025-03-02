import React, { useState } from "react";
import Problem from "./problem-components/Problem";

interface ProblemDisplayProps {
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
const ProblemDisplay: React.FC<ProblemDisplayProps> = ({ problem }) => {
  const [activeTab, setActiveTab] = useState<string>("problem");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-full rounded-lg overflow-y-auto border border-gray-500 bg-[#343541] text-white">
      <div className="px-2 py-3 flex flex-row">
        <div className="mr-2">
          <button
            className="px-2"
            style={activeTab === "problem" ? { fontWeight: "bold" } : {}}
            onClick={() => handleTabClick("problem")}
          >
            Problem
          </button>
        </div>
        <div className="mx-2">
          <button
            className="px-2"
            style={activeTab === "submissions" ? { fontWeight: "bold" } : {}}
            onClick={() => handleTabClick("submissions")}
          >
            Submissions
          </button>
        </div>
      </div>
      <hr />
      {activeTab === "problem" && <Problem problem={problem} />}
    </div>
  );
};

export default ProblemDisplay;
