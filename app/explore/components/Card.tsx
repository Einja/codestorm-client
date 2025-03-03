import React from "react";

interface CardProps {
  courseName: string;
  courseDescription: string;
  cardColor: string;
  redirect: () => void;
}

const Card: React.FC<CardProps> = ({
  courseName,
  courseDescription,
  cardColor,
  redirect,
}) => {
  return (
    <div
      className={`cursor-pointer flex-shrink-0 w-80 h-96 ${cardColor} transition-colors duration-400 p-4 rounded-xl text-white  
      ${cardColor === "bg-indigo-600" ? "hover:bg-indigo-700" : ""}
      ${cardColor === "bg-blue-600" ? "hover:bg-blue-700" : ""}
      ${cardColor === "bg-cyan-600" ? "hover:bg-cyan-700" : ""}
      ${cardColor === "bg-emerald-600" ? "hover:bg-emerald-700" : ""}
      ${cardColor === "bg-lime-600" ? "hover:bg-lime-700" : ""}
      ${cardColor === "bg-yellow-600" ? "hover:bg-yellow-700" : ""}`}
      onClick={redirect}
    >
      <h2 className="text-4xl mb-10">{courseName}</h2>
      <p className="overflow-auto break-words">{courseDescription}</p>
    </div>
  );
};

export default Card;
