"use client";
import React from "react";
import Card from "./components/Card";
import useDragToScroll from "../../hooks/useDragtoScroll";

export default function Page() {
  const reroute = (link: string) => {
    window.location.href = `https://${link}`;
  }
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
          <Card
            courseName="Arrays"
            courseDescription="Master the fundamentals of arrays, from traversal to advanced algorithms like sorting and searching."
            cardColor="bg-indigo-600"
            redirect={() => reroute("www.leetcode.com/explore/learn/card/fun-with-arrays/")}
          />
          <Card
            courseName="Sorting"
            courseDescription="Learn how to sort data using simple and powerful algorithms."
            cardColor="bg-blue-600"
            redirect={() => reroute("www.leetcode.com/explore/learn/card/sorting/")}
          />
          <Card
            courseName="Stacks/Queues"
            courseDescription="Explore these fundamental data structures for managing ordered data with LIFO and FIFO operations."
            cardColor="bg-cyan-600"
            redirect={() => reroute("www.leetcode.com/explore/learn/card/queue-stack/")}
          />
          <Card
            courseName="Heaps"
            courseDescription="Understand priority queues and heap-based algorithms for efficient sorting and selection problems."
            cardColor="bg-emerald-600"
            redirect={() => reroute("www.leetcode.com/explore/learn/card/heap/")}
          />
          <Card
            courseName="Linked Lists"
            courseDescription="Dive into linked lists, mastering traversal, insertion, deletion, and advanced linked structure techniques."
            cardColor="bg-lime-600"
            redirect={() => reroute("www.leetcode.com/explore/learn/card/linked-list/")}
          />
          <Card
            courseName="Graphs"
            courseDescription="Unlock the power of graphs with BFS, DFS, shortest paths, and topological sorting techniques."
            cardColor="bg-yellow-600"
            redirect={() => reroute("www.leetcode.com/explore/learn/card/graph/")}
          />
        </div>
      </div>
    </div>
  );
}
