import React, { useContext } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { SubmissionContext } from "@/components/context/SubmissionContext";
import Result from "./submissions-components/Result";

const Submissions: React.FC = () => {
  const { loading, showResult } = useContext(SubmissionContext);

  return (
    <div className="">
      {loading && (
        <div className="h-full flex justify-center items-center mt-32">
          <TailSpin />
        </div>
      )}
      {showResult && <Result />}
    </div>
  );
};

export default Submissions;
