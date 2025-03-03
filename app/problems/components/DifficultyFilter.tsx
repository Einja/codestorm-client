"use client";
import React, { useState, useContext } from "react";
import { FilterContext } from "@/components/context/FilterContext";



const DifficultyFilter: React.FC = () => {
  const {minDiff, setMinDiff, maxDiff, setMaxDiff} = useContext(FilterContext);

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-500 p-6 mx-3 rounded-lg text-white ">
      <div className="text-3xl">Difficulty Filter</div>
      <div className="my-10">
        <input
          type="number"
          placeholder="min"
          value={minDiff}
          onChange={(e) => setMinDiff(e.target.value)}
          className="w-20 mx-5 rounded-md text-black p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="text-2xl">-</span>
        <input
          type="number"
          placeholder="max"
          value={maxDiff}
          onChange={(e) => setMaxDiff(e.target.value)}
          className="w-20 mx-5 rounded-md text-black p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default DifficultyFilter;
