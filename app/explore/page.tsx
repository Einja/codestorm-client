import React from "react";
import Card from "../../components/explore/Card";
export default function page() {
  return (
    <div>
      <div className="container mb-40">
        <p className="mb-5 text-lg ml-1">Welcome to</p>
        <p className="text-left max-w-lg font-bold text-4xl">
          Mini-LeetCode Explore
        </p>
      </div>
      <div className="container my-auto">
        <p className="text-left max-w-lg font-bold text-4xl">Learn</p>
        <div className="flex overflow-x-scroll no-scrollbar space-x-4 p-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}
