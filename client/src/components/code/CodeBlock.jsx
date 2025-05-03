import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const detectLanguage = (code) => {
  const patterns = {
    javascript: {
      pattern: /\b(const|let|var|function|=>|import|export|require)\b/,
      fileExtensions: ['.js', '.jsx']
    },
    typescript: {
      pattern: /\b(interface|type|namespace|declare|as)\b|:\s*(string|number|boolean|any)\b/,
      fileExtensions: ['.ts', '.tsx']
    },
    python: {
      pattern: /\b(def|class|import|from|if\s+__name__\s*==\s*['"]__main__['"]):?\b|print\(/,
      fileExtensions: ['.py']
    },
    java: {
      pattern: /\b(public|private|protected|class|void|static)\b/,
      fileExtensions: ['.java']
    },
    html: {
      pattern: /<\/?[a-z][\s\S]*>/i,
      fileExtensions: ['.html', '.htm']
    },
    css: {
      pattern: /[{;][\s]*[a-z-]+\s*:|@media|@import/,
      fileExtensions: ['.css', '.scss', '.less']
    },
    sql: {
      pattern: /\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|CREATE|DROP|TABLE|DATABASE)\b/i,
      fileExtensions: ['.sql']
    },
    php: {
      pattern: /(<\?php)|(\$[a-zA-Z_]\w*)/,
      fileExtensions: ['.php']
    },
    ruby: {
      pattern: /\b(def|class|module|require|gem|do|end)\b/,
      fileExtensions: ['.rb']
    },
    rust: {
      pattern: /\b(fn|let|mut|struct|impl|pub|use)\b/,
      fileExtensions: ['.rs']
    },
    go: {
      pattern: /\b(func|package|import|type|struct|interface)\b/,
      fileExtensions: ['.go']
    },
    json: {
      pattern: /^[\s]*[{[][\s]*("[\w\s]*"\s*:|\d)/,
      fileExtensions: ['.json']
    },
    markdown: {
      pattern: /^#+\s|^\s*[-*]\s|\[.+\]\(.+\)/m,
      fileExtensions: ['.md', '.markdown']
    }
  };

  // Try to detect language from code content
  for (const [lang, { pattern }] of Object.entries(patterns)) {
    if (pattern.test(code)) {
      return lang;
    }
  }

  return 'text';
};

const formatLanguageDisplay = (lang) => {
  const displayNames = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'python': 'Python',
    'java': 'Java',
    'html': 'HTML',
    'css': 'CSS',
    'sql': 'SQL',
    'php': 'PHP',
    'ruby': 'Ruby',
    'rust': 'Rust',
    'go': 'Go',
    'json': 'JSON',
    'markdown': 'Markdown',
    'text': 'Plain Text'
  };

  return displayNames[lang] || lang.charAt(0).toUpperCase() + lang.slice(1);
};

const CodeBlock = ({ language: providedLanguage, children }) => {
  const [copied, setCopied] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState(providedLanguage || 'text');

  useEffect(() => {
    if (!providedLanguage) {
      const detected = detectLanguage(String(children));
      setDetectedLanguage(detected);
    }
  }, [children, providedLanguage]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const displayLanguage = formatLanguageDisplay(providedLanguage || detectedLanguage);

  return (
    <div className="relative group rounded-lg overflow-hidden">
      <div className="flex items-center justify-between absolute w-full px-4 py-2 bg-gray-800/95 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">{displayLanguage}</span>
          {!providedLanguage && (
            <span className="text-xs text-gray-500">(auto-detected)</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copy code"
          aria-label={copied ? "Code copied" : "Copy code"}
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
        language={detectedLanguage}
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
