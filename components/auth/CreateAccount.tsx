import React from "react";

interface CreateAccountProps {
  switchAuthDisplay: () => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ switchAuthDisplay }) => {
  return (
    <div className="text-gray-700">
      <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>
      <form>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 focus:outline-none"
            type="password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 transition-colors duration-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-center py-4 mt-3">
          <button type="button" onClick={switchAuthDisplay}>
            Already a user? Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
