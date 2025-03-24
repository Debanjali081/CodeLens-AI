import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CodeEditor from "../components/CodeEditor";
import ReviewOutput from "../components/ReviewOutput";
import ReviewButton from "../components/ReviewButton";

const CodeReviewer = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return alert("Please enter some code!");
    setLoading(true);

    try {
      const response = await axios.post(import.meta.env.VITE_AI_CODE_REVIEWER, {
        prompt: code,
      });

      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <div className="p-4 border-b border-gray-700">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-150"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Code Input */}
        <div className="w-1/2 flex flex-col p-6">
          <CodeEditor code={code} setCode={setCode} />
          <ReviewButton handleReview={handleReview} loading={loading} />
        </div>

        {/* Right Side - AI Review Output */}
        <div className="w-1/2 flex flex-col p-6 bg-gray-800 border-l border-gray-700">
          <h2 className="text-xl font-semibold mb-4">AI Review:</h2>
          <ReviewOutput review={review} />
        </div>
      </div>
    </main>
  );
};

export default CodeReviewer;