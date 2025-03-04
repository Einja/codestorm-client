import React, { useContext } from "react";
import Problem from "./problem-components/Problem";
import Submissions from "./problem-components/Submissions"
import { SubmissionContext } from "@/components/context/SubmissionContext";
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
  const {problemTab, setProblemTab} = useContext(SubmissionContext);

  const handleTabClick = (tab: string) => {
    setProblemTab(tab);
  };

  return (
    <div className="h-full rounded-lg overflow-y-auto border border-gray-500 bg-[#343541] text-white">
      <div className="px-2 py-3 flex flex-row">
        <div className="mr-2">
          <button
            className="px-2"
            style={problemTab === "problem" ? { fontWeight: "bold" } : {}}
            onClick={() => handleTabClick("problem")}
          >
            Problem
          </button>
        </div>
        <div className="mx-2">
          <button
            className="px-2"
            style={problemTab === "submissions" ? { fontWeight: "bold" } : {}}
            onClick={() => handleTabClick("submissions")}
          >
            Submissions
          </button>
        </div>
      </div>
      <hr />
      {problemTab === "problem" && <Problem problem={problem} />}
      {problemTab === "submissions" && <Submissions />}
    </div>
  );
};

export default ProblemDisplay;
