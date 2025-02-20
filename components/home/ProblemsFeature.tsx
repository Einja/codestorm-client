import React from "react";
import Link from "next/link";

const ProblemsFeature: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between h-96 mb-10 md:mb-0">
        <div className="md:w-1/2 py-10 text-center justify-center">
          <h2 className="text-4xl mb-4">Questions</h2>
          <p className="mb-4">FILLER</p>
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
          <h2 className="text-4xl mb-4">Over 14+ Languages</h2>
          <p className="mb-4">FILLER</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsFeature;
