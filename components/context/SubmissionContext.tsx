"use client";
import { useState, createContext } from "react";

interface Status {
  id: number;
  description: string;
}

interface ResultAttributes {
  compile_output: string | null;
  memory: number;
  message: string | null;
  status: Status;
  stderr: string | null;
  stdout: string | null;
  time: string;
  token: string;
}

interface SubmissionContextType {
  loading: boolean;
  setLoading: (b: boolean) => void;
  result: ResultAttributes;
  setResult: (r: ResultAttributes) => void;
  showResult: boolean;
  setShowResult: (b: boolean) => void;
  success: boolean;
  totalCases: number;
  setTotalCases: (n: number) => void;
  casesPassed: number;
  setCasesPassed: (n: number) => void;
  problemTab: string;
  setProblemTab: (s: string) => void;
}

export const SubmissionContext = createContext<SubmissionContextType>({
  loading: false,
  setLoading: () => {},
  result: {
    compile_output: null,
    memory: 0,
    message: null,
    status: { id: 0, description: "" },
    stderr: null,
    stdout: null,
    time: "",
    token: "",
  },
  setResult: () => {},
  showResult: false,
  setShowResult: () => {},
  success: false,
  totalCases: 0,
  setTotalCases: () => {},
  casesPassed: 0,
  setCasesPassed: () => {},
  problemTab: "",
  setProblemTab: () => {},
});

type SubmissionContextProviderType = {
  children: React.ReactNode;
};

export const SubmissionContextProvider = ({
  children,
}: SubmissionContextProviderType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultAttributes>({
    compile_output: null,
    memory: 0,
    message: null,
    status: { id: 0, description: "" },
    stderr: null,
    stdout: null,
    time: "",
    token: "",
  });
  const [showResult, setShowResult] = useState<boolean>(false);
const [totalCases, setTotalCases] = useState<number>(0);
const [casesPassed, setCasesPassed] = useState<number>(0);
  const [tab, setTab] = useState<string>("problem");

  return (
    <SubmissionContext.Provider
      value={{
        loading: loading,
        setLoading: setLoading,
        result: result,
        setResult: setResult,
        showResult: showResult,
        setShowResult: setShowResult,
        success: false,
        totalCases: totalCases,
        setTotalCases: setTotalCases,
        casesPassed: casesPassed,
        setCasesPassed: setCasesPassed,
        problemTab: tab,
        setProblemTab: setTab,
      }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};
