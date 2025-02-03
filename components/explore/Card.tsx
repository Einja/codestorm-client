import React from "react";

interface CardProps {
  courseName: string;
  courseDescription: string;
}

const Card: React.FC<CardProps> = ({courseName, courseDescription}) => {
  return (
    <div className="flex-shrink-0 w-80 h-96 bg-cyan-950 p-4 rounded-xl text-white">
      <h2 className="text-4xl mb-10">{courseName}</h2>
      <p className="overflow-auto break-words">
        {courseDescription}
      </p>
    </div>
  );
};

export default Card;
  