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
    <div className="flex h-screen font-sans">
      <Problem id={param.id}/>
      <Editor />
    </div>
  );
}
