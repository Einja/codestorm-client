"use server";
import { formatCPPEnv, formatPythonEnv } from "./formatOutputs";

/*
C++ -> language_id = 76
Python3 -> language_id = 92
*/

const languageToId = {
  cpp: 76,
  python: 92,
};

const handleRunCases = async (code, language, sampleCases) => {
  let judgeCode = "";
  switch (language) {
    case "cpp":
      judgeCode = formatCPPEnv(code, sampleCases, language);
      break;

    case "python":
      judgeCode = formatPythonEnv(code, sampleCases, language);
      break;
  };
  
  const url = "https://judge0-ce.p.rapidapi.com/submissions?wait=true";
  const apiKey = process.env.JUDGE0_API_KEY;
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      language_id: languageToId[language],
      source_code: judgeCode,
      cpu_time_limit: 3,
      memory_limit: 128000,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export { handleRunCases };
