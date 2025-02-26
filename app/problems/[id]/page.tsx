"use client";
import React from "react";
import Editor from "./components/Editor";
import Problem from "./components/Problem";
import TestCases from "./components/TestCases";
interface Params {
  id: string;
}

export default function ProblemPage({ params }: { params: Promise<Params> }) {
  const param = React.use(params);

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen overflow-hidden font-sans"
      style={{ letterSpacing: "0", fontWeight: "normal" }}
    >
      <div className="min-h-screen md:w-1/2">
        <div className="h-full">
          <div className="px-2 pt-2 md:py-2">
            <Problem id={param.id} />
          </div>
        </div>
      </div>
      <div className="min-h-screen md:w-1/2">
        <div className="h-full">
          <div className="h-2/3 py-2 pl-2 md:pl-0 pr-2">
            <Editor id={param.id} />
          </div>
          <div className="h-1/3 pb-2 pl-2 md:pl-0 pr-2">
            <TestCases />
          </div>
        </div>
      </div>
    </div>
  );
}
