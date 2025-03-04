"use client";
import React, { useState, useEffect } from "react";
import { MathJaxContext } from "better-react-mathjax";
import { readProblemById } from "@/backend/firebase/database/index";
import { SubmissionContextProvider } from "@/components/context/SubmissionContext";
import { LanguageContextProvider } from "@/components/context/LanguageContext";
import Editor from "./components/Editor";
import ProblemDisplay from "./components/ProblemDisplay";
import Console from "./components/Console";

interface Params {
  id: string;
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
export default function ProblemPage({ params }: { params: Promise<Params> }) {
  const param = React.use(params);
  const [code, setCode] = useState<string>("");
  const [problem, setProblems] = useState<ProblemAttributes | undefined>();
  useEffect(() => {
    const fetchProblem = async () => {
      const data = await readProblemById(param.id);
      setProblems(data);
    };

    fetchProblem();
  }, [param.id]);

  if (!problem) {
    return (
      <div className="flex h-screen justify-center items-center text-6xl">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <SubmissionContextProvider>
      <LanguageContextProvider>
        <MathJaxContext>
          <div
            className="flex flex-col md:flex-row min-h-screen overflow-hidden font-sans"
            style={{ letterSpacing: "0", fontWeight: "normal" }}
          >
            <div className="h-screen md:w-1/2">
              <div className="h-full">
                <div className="h-full px-2 pt-2 md:py-2">
                  <ProblemDisplay problem={problem} />
                </div>
              </div>
            </div>
            <div className="h-screen md:w-1/2">
              <div className="h-full">
                <div className="h-2/3 py-2 pl-2 md:pl-0 pr-2">
                  <Editor id={problem.id} code={code} setCode={setCode} />
                </div>
                <div className="h-1/3 pb-2 pl-2 md:pl-0 pr-2">
                  <Console
                    code={code}
                    problemId={problem.id}
                    problemInputs={problem.inputs}
                  />
                </div>
              </div>
            </div>
          </div>
        </MathJaxContext>
      </LanguageContextProvider>
    </SubmissionContextProvider>
  );
}
