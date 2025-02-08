"use client";
import React, { useState } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

interface AuthModelProps {
  onClose: () => void;
}

const AuthModel: React.FC<AuthModelProps> = ({ onClose }) => {
  const [toggleLogin, setToggleLogin] = useState(true);

  const switchAuthDisplay = () => {
    setToggleLogin(!toggleLogin);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-10 rounded-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          X
        </button>
        {toggleLogin ? (
          <Login switchAuthDisplay={switchAuthDisplay} />
        ) : (
          <CreateAccount switchAuthDisplay={switchAuthDisplay}/>
        )}
      </div>
    </div>
  );
};

export default AuthModel;
