import React from "react";
import DifficultyFilter from "./components/DifficultyFilter";
import ProblemContainer from "./components/ProblemContainer";
import { FilterContextProvider } from "@/components/context/FilterContext";
export default function Page() {
  return (
    <FilterContextProvider>
      <div className="fade-in">
        <div className="container mb-20">
          <h1 className="text-left max-w-lg text-4xl">Problems</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="py-4 w-full md:w-2/3">
            <ProblemContainer />
          </div>
          <div className="py-4 w-full md:w-1/3">
            <DifficultyFilter />
          </div>
        </div>
      </div>
    </FilterContextProvider>
  );
}
