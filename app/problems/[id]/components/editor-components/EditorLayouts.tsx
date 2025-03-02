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

const TYPE_MAPPINGS: { [key: string]: { [lang: string]: string } } = {
  int: { cpp: "int", python: "int" },
  float: { cpp: "float", python: "float" },
  string: { cpp: "string", python: "str" },
  bool: { cpp: "bool", python: "bool" },
  "list<int>": { cpp: "vector<int>", python: "List[int]" },
  "list<float>": { cpp: "vector<float>", python: "List[float]" },
  "list<string>": { cpp: "vector<string>", python: "List[str]" },
};

const formatCodeTemplate = (language: string, problem: ProblemAttributes) => {
  switch (language) {
    case "cpp":
      return `class Solution {
public:
    ${TYPE_MAPPINGS[problem.output][language]} solution(${problem.inputs
        .map((input, index) => {
          const [varName, varType] = input.split(":");
          return `${TYPE_MAPPINGS[varType][language]} ${varName}${
            index < problem.inputs.length - 1 ? ", " : ""
          }`;
        })
        .join("")}) {
        
    }
};`;
    case "python":
      return `class Solution:
    def solution(self, ${problem.inputs
      .map((input, index) => {
        const [varName, varType] = input.split(":");
        return `${varName}: ${TYPE_MAPPINGS[varType][language]}${
          index < problem.inputs.length - 1 ? ", " : ""
        }`;
      })
      .join("")}):
        `;
    default:
      return `Unknown language`;
  }
};

export default formatCodeTemplate;
