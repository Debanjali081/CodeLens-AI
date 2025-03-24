import React from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "./CodeBlock";
import { LightBulbIcon } from '@heroicons/react/24/outline';

const ReviewOutput = ({ review, loading }) => {
  // Animation variants for better reuse
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 }
  };

  const markdownComponents = {
    h1: ({ children }) => (
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-3xl font-bold mb-6 text-green-400 border-b border-gray-600 pb-2"
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4 text-green-300 border-b border-gray-600/50 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-3 text-green-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-gray-200">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 my-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <motion.li
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="flex items-start gap-2"
      >
        <span className="text-green-400 mt-1">•</span>
        <span className="flex-1">{children}</span>
      </motion.li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-green-500 pl-4 my-4 text-gray-300 bg-gray-800/50 py-2 rounded-r">
        {children}
      </blockquote>
    ),
    code: ({ inline, className, children }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'javascript';
      
      return inline ? (
        <code className="bg-gray-800 px-1.5 py-0.5 rounded font-mono text-green-300">
          {children}
        </code>
      ) : (
        <CodeBlock language={language}>{children}</CodeBlock>
      )
    },
  };

  return (
    <motion.div 
      className="w-full h-full bg-gray-700/50 backdrop-blur p-4 rounded-lg text-white overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-center h-full"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-green-500/20 border-t-green-500 rounded-full animate-spin" />
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400"
              >
                Analyzing code...
              </motion.p>
            </div>
          </motion.div>
        ) : review ? (
          <motion.div
            key="content"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prose prose-invert prose-pre:p-0 max-w-none"
          >
            <ReactMarkdown components={markdownComponents}>
              {review}
            </ReactMarkdown>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4"
          >
            <LightBulbIcon className="w-16 h-16 opacity-50" />
            <motion.p 
              variants={fadeInUp}
              className="text-lg font-medium"
            >
              Ready to review your code
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-sm opacity-75"
            >
              Paste your code and click "Get Review"
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReviewOutput;
