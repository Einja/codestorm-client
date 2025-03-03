"use client";
import { useState, createContext } from "react";

interface FilterContextType {
  minDiff: number | string;
  setMinDiff: (diff: number | string) => void;
  maxDiff: number | string;
  setMaxDiff: (diff: number | string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  minDiff: 0,
  setMinDiff: () => {},
  maxDiff: 9999,
  setMaxDiff: () => {},
});

type FilterContextProviderType = {
  children: React.ReactNode;
};

export const FilterContextProvider = ({
  children,
}: FilterContextProviderType) => {
  const [minDiff, setMinDiff] = useState<number | string>("");
  const [maxDiff, setMaxDiff] = useState<number | string>("");

  return (
    <FilterContext.Provider
      value={{ minDiff, setMinDiff, maxDiff, setMaxDiff }}
    >
      {children}
    </FilterContext.Provider>
  );
};
