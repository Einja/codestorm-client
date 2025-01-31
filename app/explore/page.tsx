"use client";
import React, {useRef, useEffect} from "react";
import Card from "../../components/explore/Card";
import useDragToScroll from "../../hooks/useDragtoScroll";

export default function page() {
  const scrollContainerRef = useDragToScroll();
  return (
    <div>
      <div className="container mb-40">
        <p className="mb-5 text-lg ml-1">Welcome to</p>
        <p className="text-left max-w-lg font-bold text-4xl">
          CodeCipher Explore
        </p>
      </div>
      <div className="container my-auto">
        <p className="text-left max-w-lg font-bold text-4xl">Learn</p>
        <div ref={scrollContainerRef} className="select-none flex overflow-x-scroll no-scrollbar space-x-4 p-4">
          <Card courseName="Arrays" courseDescription="Desc 1"/>
          <Card courseName="Strings" courseDescription="Desc 1"/>
          <Card courseName="Stacks and Queues" courseDescription="Desc 1"/>
          <Card courseName="Heaps" courseDescription="Desc 1"/>
          <Card courseName="Linked Lists" courseDescription="Desc 1"/>
          <Card courseName="Graphs" courseDescription="Desc 1"/>
        </div>
      </div>
    </div>
  );
}
