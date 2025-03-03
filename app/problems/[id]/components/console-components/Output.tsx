import React from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import Result from "./output-components/Result";
interface SampleCaseAttributes {
  problemId: string;
  input: Array<string>;
  inputTypes: Array<string>;
  expectedOutput: string;
  sampleCase: boolean;
}
interface Status {
  id: number;
  description: string;
}

interface ResultAttributes {
  compile_output: string | null;
  memory: number;
  message: string | null;
  status: Status;
  stderr: string | null;
  stdout: string | null;
  time: string;
  token: string;
}
interface OutputProps {
  loading: boolean;
  showResult: boolean;
  sampleCases: Array<SampleCaseAttributes>;
  result: ResultAttributes;
}

const Output: React.FC<OutputProps> = ({
  loading,
  showResult,
  sampleCases,
  result
}) => {
  return (
    <div>
      {loading && (
        <div className="h-full flex justify-center items-center">
          <TailSpin />
        </div>
      )}
      {showResult && <Result sampleCases={sampleCases} result={result} />}
    </div>
  );
};

export default Output;
