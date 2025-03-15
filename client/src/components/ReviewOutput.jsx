import React from "react";

const ReviewOutput = ({ review }) => {
  return (
    <div className="w-full h-full bg-gray-700 p-4 rounded-lg text-white overflow-auto">
      {review ? review : "AI review will appear here..."}
    </div>
  );
};

export default ReviewOutput;
