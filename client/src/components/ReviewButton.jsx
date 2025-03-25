import React from "react";
import { useTheme } from "../context/ThemeContext";

const ReviewButton = ({ handleReview, loading }) => {
  const { isDark } = useTheme();
  
  return (
    <button
      onClick={handleReview}
      disabled={loading}
      className={`mt-4 px-6 py-3 rounded-lg font-medium flex items-center justify-center
        ${isDark 
          ? 'bg-blue-500 hover:bg-blue-600' 
          : 'bg-blue-600 hover:bg-blue-700'} 
        text-white transition-colors duration-150 disabled:opacity-50`}
    >
      {loading ? (
        <>
          <span className="animate-spin mr-2">⟳</span>
          Analyzing...
        </>
      ) : (
        'Get Review'
      )}
    </button>
  );
};

export default ReviewButton;
