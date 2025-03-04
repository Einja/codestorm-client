import React, { useContext } from "react";
import { SubmissionContext } from "@/components/context/SubmissionContext";
const Success = () => {
  const { result, totalCases, casesPassed } = useContext(SubmissionContext);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center space-x-4 mx-7 py-3">
          <div className="text-lg font-bold text-emerald-400">Accepted</div>
          <div className="">
            {casesPassed}/{totalCases} testcases passed
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-3 mx-2">
          <div className="flex flex-col h-48 w-1/2 items-center justify-center p-3 bg-gray-700 rounded-lg">
            <div className="text-gray-400 text-md">Runtime</div>
            <div className="text-2xl font-bold">
              {(Number(result.time) * 1000)} ms
            </div>
          </div>
          <div className="flex flex-col h-48 w-1/2 items-center justify-center p-3 bg-gray-700 rounded-lg">
            <div className="text-gray-400 text-md">Memory</div>
            <div className="text-2xl font-bold">
              {Math.round(result.memory / 1048576)} MB
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
