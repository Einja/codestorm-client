import React from "react";

const TestCases: React.FC = () => {
  return (
    <div className="h-full rounded-lg overflow-y-auto border border-gray-500 bg-[#343541] text-white">
      <div>
        <div className="flex items-center justify-between p-2">
          <div className="font-bold px-2">Console</div>
          <div>
            <button className="h-10 px-4 mr-3 bg-gray-500 transition-colors duration-200 hover:bg-gray-600 rounded-lg">
              Run
            </button>
            <button className="h-10 px-4 bg-green-500 transition-colors duration-200 hover:bg-green-700 rounded-lg">
              Submit
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="p-4">Test Cases</div>
    </div>
  );
};

export default TestCases;
