import React, { useState, useEffect, useContext } from "react";
import { handleRunCases } from "@/backend/api/judge0/handleRunCases";
import { handleSubmission } from "@/backend/api/judge0/handleSubmission";
import { LanguageContext } from "@/components/context/LanguageContext";
import { UserContext } from "@/components/context/AuthContext";
import TestCases from "./console-components/TestCases";
import Output from "./console-components/Output";
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

interface ConsoleProps {
  code: string;
  problemId: string;
  problemInputs: Array<string>;
}

const Console: React.FC<ConsoleProps> = ({
  code,
  problemId,
  problemInputs,
}) => {
  const [activeTab, setActiveTab] = useState<string>("testcases");
  const user = useContext(UserContext);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const { language } = useContext(LanguageContext);

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [sampleCases, setSampleCases] = useState<SampleCaseAttributes[]>([]);
  const [result, setResult] = useState<ResultAttributes>({
    compile_output: null,
    memory: 0,
    message: null,
    status: {id: 0, description: ""},
    stderr: null,
    stdout: null,
    time: "",
    token: "",
  });

  useEffect(() => {
    const fetchSampleCases = async () => {
      if (sampleCases.length === 0) {
        const data = await readSampleTestcasesById(problemId);
        const fdata = data.map((doc) => ({
          problemId: doc.problemId,
          input: doc.input,
          inputTypes: doc.inputTypes,
          expectedOutput: doc.expectedOutput,
          sampleCase: doc.sampleCase,
        }));
        console.log(fdata);
        setSampleCases(fdata);
      }
    };

    fetchSampleCases();
  }, []);

  const handleCasesFromTestCases = (
    casesFromTestCases: SampleCaseAttributes[]
  ) => {
    setSampleCases(casesFromTestCases);
  };

  const handleRunClick = async (
    code: string,
    language: string,
    sampleCases: SampleCaseAttributes[]
  ) => {
    setShowResult(false);
    setLoading(true);
    setActiveTab("output");
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 4000);
    // max(4000, min(x, 9999));
    // comment here to prevent breaking api limit every day...
    const output = await handleRunCases(code, language, sampleCases);
    console.log(output);
    setResult(output);
  };

  const handleSubmitClick = async (code: string, language: string) => {
    if (!user) {
      console.log("Please login to submit code!");
      return;
    }
    console.log("Success!");
    // comment here to prevent breaking api limit every day...
    // const output = await handleSubmission(code, language);
    // console.log(output);
  };

  return (
    <div className="flex flex-col w-full h-full rounded-lg overflow-y-auto border border-gray-500 bg-[#343541] text-white">
      <div>
        <div className="flex items-center justify-between p-2">
          <div className="font-bold px-2">Console</div>
          <div>
            <button
              className="h-10 px-4 mr-3 bg-gray-500 transition-colors duration-200 hover:bg-gray-600 rounded-lg"
              onClick={() => handleRunClick(code, language, sampleCases)}
            >
              Run
            </button>
            <button
              className="h-10 px-4 bg-green-500 transition-colors duration-200 hover:bg-green-700 rounded-lg"
              onClick={() => handleSubmitClick(code, language)}
            >
              Submit
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="px-2 py-3 flex flex-row">
        <div className="mr-2">
          <button
            className="px-2"
            style={activeTab === "testcases" ? { fontWeight: "bold" } : {}}
            onClick={() => handleTabClick("testcases")}
          >
            Testcases
          </button>
        </div>
        <div className="mx-2">
          <button
            className="px-2"
            style={activeTab === "output" ? { fontWeight: "bold" } : {}}
            onClick={() => handleTabClick("output")}
          >
            Output
          </button>
        </div>
      </div>
      {activeTab === "testcases" && (
        <TestCases
          sampleCases={sampleCases}
          onCaseChange={handleCasesFromTestCases}
          problemInputs={problemInputs}
        />
      )}
      {activeTab === "output" && (
        <Output
          loading={loading}
          result={result}
          showResult={showResult}
          sampleCases={sampleCases}
        />
      )}
    </div>
  );
};

export default Console;
