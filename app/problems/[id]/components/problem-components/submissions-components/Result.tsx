import React, { useContext } from "react";
import Success from "./result-components/Success";
import Failure from "./result-components/Failure";
import { SubmissionContext } from "@/components/context/SubmissionContext";
const Result: React.FC = () => {
  const { result, totalCases, casesPassed } = useContext(SubmissionContext);

  return (
    <div className="flex-1 overflow-y-auto">
      <div>
        {((result["status"]["id"] === 3) && (totalCases === casesPassed)) ? (
          <Success />
        ) : (
          <Failure />
        )}
      </div>
    </div>
  );
};

export default Result;
