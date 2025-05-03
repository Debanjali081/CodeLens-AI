import React from "react";
import { CodeTextarea } from "../ui/code-textarea";

const CodeEditor = ({ 
  code, 
  setCode, 
  placeholder = "Paste your code here...",
  language = "javascript"
}) => {
  return (
    <CodeTextarea 
      value={code} 
      onChange={setCode}
      placeholder={placeholder}
      language={language}
      className="min-h-[300px]"
    />
  );
};

export default CodeEditor;
