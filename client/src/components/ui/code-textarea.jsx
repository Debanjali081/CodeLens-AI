import React from "react";
import Textarea  from "../ui/textarea";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/utils";
import { Code2 } from "lucide-react";

const CodeTextarea = React.forwardRef(
  ({ 
    value, 
    onChange, 
    language = "javascript",
    showLineCount = true,
    showLanguageBadge = true,
    minHeight = "300px",
    className,
    placeholder = "Paste your code here...",
    ...props 
  }, ref) => {
    const { isDark } = useTheme();
    const lineCount = value?.split('\n').length || 1;
    
    const handleChange = (e) => {
      onChange(e.target.value);
    };
    
    return (
      <div className="relative w-full h-full group">
        {showLanguageBadge && language && (
          <div className={`absolute top-2 right-3 px-2 py-0.5 text-xs rounded-md flex items-center gap-1.5 ${
            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
          } font-mono z-10`}>
            <Code2 className="w-3 h-3" />
            {language}
          </div>
        )}
        
        <Textarea
          ref={ref}
          className={cn(
            `w-full h-full resize-none font-mono text-sm p-4`,
            `min-h-[${minHeight}]`,
            isDark 
              ? 'bg-gray-900/80 border-gray-700 text-gray-100 focus-visible:ring-blue-600' 
              : 'bg-gray-50 border-gray-300 text-gray-800 focus-visible:ring-blue-500',
            'rounded-lg transition-all duration-200 leading-relaxed focus-visible:ring-1',
            className
          )}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          spellCheck={false}
          {...props}
        />
        
        {showLineCount && (
          <div className={`absolute bottom-2 right-3 px-2 py-0.5 text-xs ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          } font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
            {lineCount} {lineCount === 1 ? 'line' : 'lines'}
          </div>
        )}
      </div>
    );
  }
);

CodeTextarea.displayName = "CodeTextarea";

export { CodeTextarea };