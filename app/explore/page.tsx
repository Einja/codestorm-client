"use client";
import React from "react";
import Card from "./components/Card";
import useDragToScroll from "../../hooks/useDragtoScroll";

export default function Page() {
  const scrollContainerRef = useDragToScroll();
  return (
    <div className="fade-in">
      <div className="container mb-40">
        <p className="mb-5 text-lg text-bold ml-1">Welcome to</p>
        <p className="text-left max-w-lg text-4xl">CodeStorm Explore</p>
      </div>
      <div className="container my-auto">
        <p className="text-left max-w-lg text-4xl">Learn</p>
        <div
          ref={scrollContainerRef}
          className="select-none flex overflow-x-scroll no-scrollbar space-x-4 p-4"
        >
          <Card courseName="Arrays" courseDescription="Desc 1" />
          <Card courseName="Strings" courseDescription="Desc 1" />
          <Card courseName="Stacks and Queues" courseDescription="Desc 1" />
          <Card courseName="Heaps" courseDescription="Desc 1" />
          <Card courseName="Linked Lists" courseDescription="Desc 1" />
          <Card courseName="Graphs" courseDescription="Desc 1" />
        </div>
      </div>
    </div>
  );
}
