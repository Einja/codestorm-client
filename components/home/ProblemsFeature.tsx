import React from "react";
import Link from "next/link";

const ProblemsFeature: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between h-96 mb-10 md:mb-0">
        <div className="md:w-1/2 py-10 text-center justify-center">
          <h2 className="text-4xl mb-4">Questions</h2>
          <p className="mb-4">Our questions are crafted to accelerate your learning as a beginner and sharpen your skills like a pro.</p>
          {/*absolute -translate-x-1/2 ensures that the button doesn't bump the text above upwards, and that button is in center.*/}
          <Link
            href="/problems"
            scroll={false}
            className="absolute -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-600"
          >
            View Questions
          </Link>
        </div>

        <div className="md:w-1/2 py-10 text-center">
          <h2 className="text-4xl mb-4">Python and C++</h2>
          <p className="mb-4">Solve problems in Python and/or C++! We support the two most popular languages for technical interviews, so you can practice the way you code best.</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsFeature;
