import React, { useState } from "react";
import axios from "axios";
import CodeEditor from "./components/CodeEditor";
import ReviewOutput from "./components/ReviewOutput";
import ReviewButton from "./components/ReviewButton";
import "./index.css";

const App = () => {
  const [code, setCode] = useState(""); // User input code
  const [review, setReview] = useState(""); // AI review response
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return alert("Please enter some code!");
    setLoading(true);

    try {
      const response = await axios.post(import.meta.env.VITE_AI_CODE_REVIEWER, {
        prompt: code,
      });

      setReview(response.data); // Store AI response
    } catch (error) {
      console.error("Error fetching review:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen bg-gray-900 text-white">
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
    </main>
  );
};

export default App;
