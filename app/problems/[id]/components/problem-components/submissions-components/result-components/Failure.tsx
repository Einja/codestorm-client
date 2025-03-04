import React, { useContext } from "react";
import { SubmissionContext } from "@/components/context/SubmissionContext";

const Failure = () => {
  const { result, totalCases, casesPassed } = useContext(SubmissionContext);
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-4 mx-7 py-3">
        <div className="text-lg font-bold text-red-400">
          {result.status.description === "Accepted"
            ? "Wrong Answer"
            : result.status.description}
        </div>
        <div className="">
          {casesPassed}/{totalCases} testcases passed
        </div>
      </div>
      <div>
        {result.stderr && (
          <div className="group relative px-3 my-2 py-4 bg-[rgba(248,97,92,0.08)]">
            <div className="align-middle px-4 text-sm text-red-500">
              <pre>{result.stderr}</pre>
            </div>
          </div>
        )}
      </div>
      <div className="mx-7 my-4 flex flex-col space-y-4">
        <div className="flex w-full flex-row items-start justify-between text-lg font-semibold gap-4">
          Case failed on test {casesPassed + 1}
        </div>
      </div>
    </div>
  );
};

export default Failure;
