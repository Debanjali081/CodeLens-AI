import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const CodeBlock = ({ language, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden">
      <div className="flex items-center justify-between absolute w-full px-4 py-2 bg-gray-800/95 backdrop-blur">
        <span className="text-xs text-gray-400 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copy code"
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-500" />
          ) : (
            <ClipboardIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      <SyntaxHighlighter
        style={oneDark}
        language={language}
        className="!mt-0 !bg-gray-800/50 !pt-12 !pb-4"
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
