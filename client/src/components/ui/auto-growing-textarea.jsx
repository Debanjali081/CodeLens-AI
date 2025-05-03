import React, { useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "@/lib/utils";

const AutoGrowingTextarea = React.forwardRef(
  ({ 
    value, 
    onChange, 
    minHeight = 80,
    maxHeight = 300,
    className,
    placeholder = "Type here...",
    ...props 
  }, ref) => {
    const { isDark } = useTheme();
    const textareaRef = useRef(null);
    const combinedRef = (node) => {
      textareaRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    
    const handleChange = (e) => {
      onChange(e.target.value);
    };
    
    useEffect(() => {
      if (textareaRef.current) {
        // Reset height to auto to get the correct scrollHeight
        textareaRef.current.style.height = 'auto';
        
        // Calculate new height
        const newHeight = Math.min(
          Math.max(textareaRef.current.scrollHeight, minHeight),
          maxHeight
        );
        
        textareaRef.current.style.height = `${newHeight}px`;
        
        // Add scrollbar if content exceeds maxHeight
        textareaRef.current.style.overflowY = 
          textareaRef.current.scrollHeight > maxHeight ? 'auto' : 'hidden';
      }
    }, [value, minHeight, maxHeight]);
    
    return (
      <Textarea
        ref={combinedRef}
        className={cn(
          `w-full resize-none transition-all duration-200 overflow-hidden`,
          isDark 
            ? 'bg-gray-900/80 border-gray-700 text-gray-100 focus-visible:ring-blue-600' 
            : 'bg-gray-50 border-gray-300 text-gray-800 focus-visible:ring-blue-500',
          'rounded-lg focus-visible:ring-1',
          className
        )}
        style={{ minHeight: `${minHeight}px`, maxHeight: `${maxHeight}px` }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

AutoGrowingTextarea.displayName = "AutoGrowingTextarea";

export { AutoGrowingTextarea };
