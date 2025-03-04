const inputConversion = {
  cpp: "{}",
  python: "[]",
};
// ugly ahh file
const formatInput = (inputs, inputTypes, language) => {
  let formattedInputs = [];
  for (let i = 0; i < inputs.length; i++) {
    const [inputVal, inputType] = [inputs[i], inputTypes[i]];

    if (inputType === "string") {
      formattedInputs.push(`"${inputVal}"`);
    } else if (inputType.startsWith("list")) {
      formattedInputs.push(
        `${inputConversion[language][0]}${inputVal.substring(
          1,
          inputVal.length - 1
        )}${inputConversion[language][1]}`
      );
    } else {
      formattedInputs.push(inputVal);
    }
  }
  return formattedInputs;
};

// template was borrowed online
// references: https://en.cppreference.com/w/cpp/types/is_same
// https://en.cppreference.com/w/cpp/language/sfinae

const formatCPPEnv = (code, sampleCases, language) => {
  return `
#include <bits/stdc++.h>
using namespace std;
template <typename T, typename = void>
struct is_iterable : false_type {};

template <typename T>
struct is_iterable<T, void_t<decltype(std::declval<T>().begin()), decltype(std::declval<T>().end())>> : true_type {};

template<typename T>
void pyPrint(const T& val, false_type) {
    if (std::is_same<T, bool>::value) {
        cout << (val ? "true" : "false");
    } else {
        cout << val;
    }
    cout << endl;
}

template<typename Container>
void pyPrint(const Container& container, true_type) {
    cout << "[";
    bool first = true;
    for (auto &val : container) {
        if (!first) cout << ",";
        cout << val;
        first = false;
    }
    cout << "]" << endl;
}

#define PYPRINT(x) pyPrint((x), is_iterable<decltype((x))>())
${code}
int main() {
    Solution sol;
${formatCPPOutput(sampleCases, language)}
    return 0;
}`;
};

const formatCPPOutput = (sampleCases, language) => {
  return sampleCases
    .map((sampleCase) => {
      return `\tPYPRINT(sol.solution(${formatInput(
        sampleCase.input,
        sampleCase.inputTypes,
        language
      ).join(", ")}));`;
    })
    .join("\n");
};

const formatPythonEnv = (code, sampleCases, language) => {
  return `
from typing import List
def printCase(value):
    if isinstance(value, list):
        print("[", end="")
        print(",".join(map(str, value)), end="")
        print("]")
    elif isinstance(value, bool):
        print("true" if value else "false")
    else:
        print(value)
        
${code}
def main():
    sol = Solution()
${formatPythonOutput(sampleCases, language)}

if __name__ == "__main__":
    main()`;
};

const formatPythonOutput = (sampleCases, language) => {
  return sampleCases
    .map((sampleCase) => {
      return `    printCase(sol.solution(${formatInput(
        sampleCase.input,
        sampleCase.inputTypes,
        language
      ).join(", ")}))`;
    })
    .join("\n");
};



export { formatCPPEnv, formatPythonEnv };
