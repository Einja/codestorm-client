import React, { useState } from "react";

interface SampleCaseAttributes {
  problemId: string;
  input: Array<string>;
  expectedOutput: string;
  sampleCase: boolean;
}

interface ResultProps {
  sampleCases: Array<SampleCaseAttributes>;
}

const Result: React.FC<ResultProps> = ({ sampleCases }) => {
  const [currentCase, setCurrentCase] = useState<number>(1);
  const handleCaseClick = (caseNum: number) => {
    setCurrentCase(caseNum);
  };
  return (
    <div className="flex-1 overflow-y-auto">
      <div>
        <div className="mx-7 text-emerald-400 font-bold">
          Compilation Successful
        </div>
        <div className="mx-3 my-4 flex flex-col space-y-4">
          <div className="flex w-full flex-row items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
              {sampleCases.map((_, index) => (
                <button
                  className="font-medium rounded-lg px-4 py-1 transition-colors duration-200 hover:bg-gray-600"
                  style={{
                    fontWeight: currentCase === index + 1 ? "bold" : "normal",
                  }}
                  key={index + 1}
                  onClick={() => handleCaseClick(index + 1)}
                >
                  Case {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 mx-4">
            {sampleCases.map(
              (sampleCase, index) =>
                currentCase === index + 1 && (
                  <div key={index}>
                    Expected Output: {sampleCase.expectedOutput}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
