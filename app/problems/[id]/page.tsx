"use client";
import React from "react";
import Editor from "./components/Editor";
import Problem from "./components/Problem";

interface Params {
  id: string;
}

export default function ProblemPage({ params }: { params: Promise<Params> }) {
  const param = React.use(params);

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans p-2 my-auto" style={{letterSpacing: "0", fontWeight: "normal"}}>
      <div className="py-2 w-screen md:w-1/2">
        <Problem id={param.id} />
      </div>
      <div className="py-2 w-screen md:w-1/2">
        <Editor />
      </div>
    </div>
  );
}
