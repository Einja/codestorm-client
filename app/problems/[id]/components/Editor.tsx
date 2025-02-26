"use client";
import React, { useState, useEffect } from "react";
import { readProblemSingular } from "@/backend/firebase/database/index";
import LanguageDropdown from "./LanguageDropdown";
import MonacoEditor from "@monaco-editor/react";

interface EditorProps {
  id: string;
  code: string;
  setCode: (code: string) => void;
}

interface ProblemAttributes {
  id: string;
  constraints: string;
  description: string;
  difficulty: number;
  examples: Map<string, string>;
  inputs: Array<string>;
  memoryLimit: string;
  name: string;
  output: string;
  runtimeLimit: string;
  tags: Array<string>;
}

const Editor: React.FC<EditorProps> = ({ id, code, setCode }) => {
  const [problem, setProblems] = useState<ProblemAttributes>();
  useEffect(() => {
    const fetchProblem = async () => {
      const data = await readProblemSingular(id);
      setProblems(data);
    };

    fetchProblem();
  }, []);

  useEffect(() => {
    if (problem) {
      setCode(
`class Solution {
public:
    ${problem.output} solution(${problem.inputs
          .map((input, index) => {
            const [varName, varType] = input.split(":");
            return `${varType} ${varName}${
              index < problem.inputs.length - 1 ? ", " : ""
            }`;
          })
          .join("")}) {
        
    }
};`
      );
    }
  }, [problem]);
  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };

  return (
    <div className="h-full rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white">
      <div className="p-2">Code</div>
      <LanguageDropdown />
      <MonacoEditor
        language="cpp"
        theme="vs-dark"
        value={code}
        options={{
          minimap: { enabled: false },
          padding: {
            top: 8,
          },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
