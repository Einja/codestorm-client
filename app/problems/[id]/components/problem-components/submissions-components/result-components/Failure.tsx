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
        <div className="text-gray-200 text-sm">
          {result.status.description === "Accepted" &&
            `${casesPassed}/${totalCases} testcases passed`}
        </div>
      </div>
      <div>
        {result.stderr && (
          <div className="group relative px-3 my-2 py-4 bg-[rgba(248,97,92,0.08)] break-normal overflow-hidden">
            <div className="align-middle px-4 text-sm text-red-500">
              <pre className="whitespace-pre-wrap">{result.stderr}</pre>
            </div>
          </div>
        )}
        {result.compile_output && result.status.id === 6 && (
          <div className="group relative px-3 my-2 py-4 bg-[rgba(248,97,92,0.08)] break-normal overflow-hidden">
            <div className="align-middle px-4 text-sm text-red-500">
              <pre className="whitespace-pre-wrap">{result.compile_output}</pre>
            </div>
          </div>
        )}
      </div>
      <div className="mx-7 my-4 flex flex-col space-y-4">
        <div className="flex w-full flex-row items-start justify-between text-lg font-semibold gap-4">
          {casesPassed !== -1
            ? `Case failed on test ${casesPassed + 1}`
            : `Program failed to execute`}
        </div>
      </div>
    </div>
  );
};

export default Failure;
