import React, { useContext } from "react";
import Success from "./result-components/Success";
import Failure from "./result-components/Failure";
import { SubmissionContext } from "@/components/context/SubmissionContext";
const Result: React.FC = () => {
  const {
    totalCases,
    casesPassed,
  } = useContext(SubmissionContext);

  return (
    <div className="flex-1 overflow-y-auto">
      <div>
        {totalCases === casesPassed ? <Success/> : <Failure/>}
      </div>
    </div>
  );
};

export default Result;
