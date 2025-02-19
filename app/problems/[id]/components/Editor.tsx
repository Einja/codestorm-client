"use client";
import React, { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import MonacoEditor from "@monaco-editor/react";
const Editor: React.FC = () => {
  const [code, setCode] = useState(
    `class Solution {
public:
    void placeholder(int params) {
        
    }
};`
  );

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };
  return (
    <div className="w-1/2 rounded-lg border border-gray-500 overflow-hidden bg-[#343541] text-white mx-2">
      <div className="p-2">Code</div>
      <LanguageDropdown />
      <MonacoEditor
        language="cpp"
        theme="vs-dark"
        value={code}
        options={{
          minimap: { enabled: false },
          padding: {
            top: 8
          },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
