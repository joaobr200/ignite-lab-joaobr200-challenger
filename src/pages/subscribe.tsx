import React from "react";
import { Link } from "react-router-dom";

const Subscribe: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="flex-1 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl">Subscribe Page</h1>
        <Link
          to="/ignite"
          className="flex items-center justify-center bg-green-500 p-6 text-white text-xl rounded w-[150px] h-5"
        >
          Lessons
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
