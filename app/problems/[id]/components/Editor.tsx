"use client";
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "@/components/context/LanguageContext";
import { readProblemById } from "@/backend/firebase/database/index";
import LanguageDropdown from "./editor-components/LanguageDropdown";
import MonacoEditor from "@monaco-editor/react";
import formatCodeTemplate from "./editor-components/EditorLayouts";
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
  const {language, setLanguage} = useContext(LanguageContext);

  useEffect(() => {
    const fetchProblem = async () => {
      const data = await readProblemById(id);
      setProblems(data);
    };

    fetchProblem();
  }, []);

  useEffect(() => {
    if (problem) {
      

      setCode(formatCodeTemplate(language, problem));
    }
  }, [problem, language]);
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
        language={language}
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
