import React, { useState, useEffect } from "react";
import { readSampleTestcasesById } from "@/backend/firebase/database";

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
  problemId: string;
  problemInputs: Array<string>;
}
const TestCases: React.FC<TestCasesProps> = ({ problemId, problemInputs }) => {
  const [sampleCases, setSampleCases] = useState<SampleCaseAttributes[]>([]);
  const [currentCase, setCurrentCase] = useState<number>(1);

  const handleCaseClick = (caseNum: number) => {
    setCurrentCase(caseNum);
  };
  useEffect(() => {
    const fetchSampleCases = async () => {
      const data = await readSampleTestcasesById(problemId);
      const fdata = data.map((doc) => ({
        problemId: doc.problemId,
        input: doc.input,
        expectedOutput: doc.expectedOutput,
        sampleCase: doc.sampleCase,
      }));
      setSampleCases(fdata);
    };

    fetchSampleCases();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      <div>
        <div className="mx-3 my-4 flex flex-col space-y-4">
          <div className="flex w-full flex-row items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
              {sampleCases.length > 0 ? (
                sampleCases.map(
                  (_, index) => (
                    <button
                      className="font-medium rounded-lg px-4 py-1 transition-colors duration-200 hover:bg-gray-600"
                      key={index + 1}
                      onClick={() => handleCaseClick(index + 1)}
                    >
                      Case {index + 1}
                    </button>
                  )
                )
              ) : (
                <div className="">Loading...</div>
              )}
            </div>
          </div>
          <div className="space-y-4 mx-4">
            {sampleCases.map(
              (sampleCase, index) =>
                currentCase === index + 1 && (
                  <div key={index}>
                    {sampleCase.input.map((inputLine, ind) => (
                      <div key={ind}>
                        <span className="font-mono">{problemInputs[ind].split(':')[0]} =</span>
                        <input
                          type="text"
                          value={inputLine}
                          onChange={(e) => {
                            const newSampleCases = [...sampleCases];
                            newSampleCases[currentCase - 1].input[ind] = e.target.value;
                            setSampleCases(newSampleCases);
                          }}
                          className="rounded px-2 py-1 mx-3 text-black font-mono"
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
