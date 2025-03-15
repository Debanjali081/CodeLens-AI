import React from "react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <textarea
      className="w-full h-full bg-gray-800 p-4 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Paste your code here..."
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
  );
};

export default CodeEditor;
