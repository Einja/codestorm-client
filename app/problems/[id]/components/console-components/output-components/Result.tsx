import React, { useState, useEffect } from "react";

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

interface ResultProps {
  sampleCases: Array<SampleCaseAttributes>;
  result: ResultAttributes;
}

const Result: React.FC<ResultProps> = ({ sampleCases, result }) => {
  const [currentCase, setCurrentCase] = useState<number>(1);
  const handleCaseClick = (caseNum: number) => {
    setCurrentCase(caseNum);
  };

  const statusAccept = result.status.description === "Accepted";
  const resultOutput = result.stdout !== null ? result.stdout.split("\n") : [];

  return (
    <div className="flex-1 overflow-y-auto">
      <div>
        <div
          className={`mx-7 mt-3 font-bold ${
            statusAccept ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {statusAccept ? "Compilation Successful" : result.status.description}
        </div>
        {!statusAccept && result.stderr && (
          <div className="group relative px-3 my-2 py-4 bg-[rgba(248,97,92,0.08)]">
            <div className="align-middle px-4 text-sm text-red-500">
              <pre>{result.stderr}</pre>
            </div>
          </div>
        )}
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
                    {sampleCase.input.map((inputLine, ind) => (
                      <div key={ind} className="py-2">
                        <span className="font-mono">Input {ind + 1}:</span>
                        <span className="rounded px-2 py-1 font-mono">
                          {inputLine}
                        </span>
                      </div>
                    ))}
                    {statusAccept && (
                      <div className="font-mono">
                        {resultOutput.length > 0 &&
                          `Output: ${resultOutput[index]}`}
                      </div>
                    )}
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
