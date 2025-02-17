import React from "react";
import DifficultyFilter from "./components/DifficultyFilter";
import ProblemContainer from "./components/ProblemContainer";

export default function Page() {
  return (
    <div className="fade-in">
      <div className="conatiner mb-20">
        <h1 className="text-left max-w-lg text-4xl">Problems</h1>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-7">
          <ProblemContainer />
        </div>
        <div className="col-span-3">
          <DifficultyFilter />
        </div>
      </div>
    </div>
  );
}
