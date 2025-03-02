import React from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import Result from "./output-components/Result";
interface SampleCaseAttributes {
  problemId: string;
  input: Array<string>;
  expectedOutput: string;
  sampleCase: boolean;
}

interface OutputProps {
  loading: boolean;
  showResult: boolean;
  sampleCases: Array<SampleCaseAttributes>;
}

const Output: React.FC<OutputProps> = ({
  loading,
  showResult,
  sampleCases,
}) => {
  return (
    <div>
      {loading && (
        <div className="h-full flex justify-center items-center">
          <TailSpin />
        </div>
      )}
      {showResult && <Result sampleCases={sampleCases} />}
    </div>
  );
};

export default Output;
