import React from "react";

interface ProblemCardProps {
  id: string;
  name: string;
  difficulty: number;
  onClick: () => void;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  id,
  name,
  difficulty,
  onClick,
}) => {
  return (
    <tr onClick={onClick} className="cursor-pointer bg-gray-700 hover:bg-gray-800">
      <th className="p-3">{id}</th>
      <th className="p-3">{name}</th>
      <th className="p-3">{difficulty}</th>
    </tr>
  );
};

export default ProblemCard;
