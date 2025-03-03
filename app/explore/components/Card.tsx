import React from "react";

interface CardProps {
  courseName: string;
  courseDescription: string;
  cardColor: string;
}

const Card: React.FC<CardProps> = ({courseName, courseDescription, cardColor}) => {
  return (
    <div className={`flex-shrink-0 w-80 h-96 ${cardColor} p-4 rounded-xl text-white`}>
      <h2 className="text-4xl mb-10">{courseName}</h2>
      <p className="overflow-auto break-words">
        {courseDescription}
      </p>
    </div>
  );
};

export default Card;
  