import React, { useState } from "react";

/*
problemId: string,
input: string[],
expectedOutput: string,
sampleCase: boolean
*/
interface SampleCaseAttributes {
  problemId: string;
  input: Array<string>;
  expectedOutput: string;
  sampleCase: boolean;
}

interface TestCasesProps {
  sampleCases: Array<SampleCaseAttributes>;
  onCaseChange: (sampleCases: Array<SampleCaseAttributes>) => void;
  problemInputs: Array<string>;
}
const TestCases: React.FC<TestCasesProps> = ({ sampleCases, onCaseChange, problemInputs }) => {

  const [currentCase, setCurrentCase] = useState<number>(1);
  const handleCaseClick = (caseNum: number) => {
    setCurrentCase(caseNum);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div>
        <div className="mx-3 my-4 flex flex-col space-y-4">
          <div className="flex w-full flex-row items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
              {sampleCases.length > 0 ? (
                sampleCases.map((_, index) => (
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
                ))
              ) : (
                <div className="items-center justify-center">Loading...</div>
              )}
            </div>
          </div>
          <div className="space-y-4 mx-4">
            {sampleCases.map(
              (sampleCase, index) =>
                currentCase === index + 1 && (
                  <div key={index}>
                    {sampleCase.input.map((inputLine, ind) => (
                      <div key={ind} className="py-2">
                        <span className="font-mono">
                          {problemInputs[ind].split(":")[0]} =
                        </span>
                        <br />
                        <input
                          type="text"
                          value={inputLine}
                          onChange={(e) => {
                            const newSampleCases = [...sampleCases];
                            newSampleCases[currentCase - 1].input[ind] =
                              e.target.value;
                              onCaseChange(newSampleCases);
                          }}
                          className="rounded px-2 py-1 text-black font-mono"
                        />
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
