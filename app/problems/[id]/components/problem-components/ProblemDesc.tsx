import React from "react";
import { MathJax } from "better-react-mathjax";

interface ProblemDescProps {
  desc: string;
}

const ProblemDesc: React.FC<ProblemDescProps> = ({ desc }) => {
  return (
    <MathJax>
      {desc.split("\\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </MathJax>
  );
};

export default ProblemDesc;
