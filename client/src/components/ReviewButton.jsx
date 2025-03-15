import React from "react";

const ReviewButton = ({ handleReview, loading }) => {
  return (
    <button
      className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg text-white font-semibold disabled:opacity-50"
      onClick={handleReview}
      disabled={loading}
    >
      {loading ? "Reviewing..." : "Get Review"}
    </button>
  );
};

export default ReviewButton;
