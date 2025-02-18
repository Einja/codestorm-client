"use client";
import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import Layout from "@/app/layout";

interface Params {
  id: string;
}

export default function ProblemPage({ params }: { params: Promise<Params> }) {
  const [code, setCode] = useState(`class Solution {};`);
  const param = React.use(params);
  return (
      <div className="flex h-screen font-sans">
        <div className="w-1/2 rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white mx-2 overflow-y-auto ">
          <div className="p-5">Problem {param.id}</div>
        </div>
        <div className="w-1/2 rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white mx-2">
          <div className="p-3">Code</div>
          <MonacoEditor
            language="cpp"
            theme="vs-dark"
            value={code}
            options={{ minimap: { enabled: false } }}
          />
        </div>
      </div>
  );
}
