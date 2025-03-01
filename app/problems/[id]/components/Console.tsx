import React, { useState, useContext } from "react";
import { handleSubmission } from "@/backend/api/judge0/handleSubmission";
import { UserContext } from "@/components/context/AuthContext";
import TestCases from "./console-components/TestCases";
import Output from "./console-components/Output";

interface ConsoleProps {
  code: string;
  problemId: string;
  problemInputs: Array<string>;
}

const Console: React.FC<ConsoleProps> = ({ code, problemId, problemInputs }) => {
  const [activeTab, setActiveTab] = useState<string>("testcases");
  const user = useContext(UserContext);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const handleSubmitClick = async (code: string) => {
    if (!user) {
      console.log("Please login to submit code!");
      return;
    }
    console.log("Success!");
    // comment here to prevent breaking api limit every day...
    // const output = await handleSubmission(code);
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
              onClick={() => handleSubmitClick(code)}
            >
              Run
            </button>
            <button
              className="h-10 px-4 bg-green-500 transition-colors duration-200 hover:bg-green-700 rounded-lg"
              onClick={() => handleSubmitClick(code)}
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
      {activeTab === "testcases" && <TestCases problemId={problemId} problemInputs={problemInputs}/>}
      {activeTab === "output" && <Output />}
    </div>
  );
};

export default Console;
