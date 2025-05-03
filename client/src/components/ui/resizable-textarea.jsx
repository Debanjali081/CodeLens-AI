import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "@/lib/utils";

const ResizableTextarea = React.forwardRef(
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
    const [isDragging, setIsDragging] = useState(false);
    const [textareaHeight, setTextareaHeight] = useState(minHeight);
    
    const handleChange = (e) => {
      onChange(e.target.value);
    };
    
    const handleMouseDown = (e) => {
      e.preventDefault();
      setIsDragging(true);
      
      const handleMouseMove = (moveEvent) => {
        const newHeight = textareaHeight + moveEvent.movementY;
        if (newHeight >= minHeight && (!maxHeight || newHeight <= maxHeight)) {
          setTextareaHeight(newHeight);
        }
      };
      
      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
    
    return (
      <div className="relative w-full group">
        <Textarea
          ref={ref}
          className={cn(
            `w-full resize-none transition-all duration-200`,
            isDark 
              ? 'bg-gray-900/80 border-gray-700 text-gray-100 focus-visible:ring-blue-600' 
              : 'bg-gray-50 border-gray-300 text-gray-800 focus-visible:ring-blue-500',
            'rounded-lg focus-visible:ring-1',
            className
          )}
          style={{ height: `${textareaHeight}px` }}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...props}
        />
        
        <div 
          className={`absolute bottom-0 w-full h-2 cursor-ns-resize ${
            isDragging ? 'bg-blue-500/30' : 'hover:bg-blue-500/20'
          } rounded-b-lg transition-colors`}
          onMouseDown={handleMouseDown}
        />
      </div>
    );
  }
);

ResizableTextarea.displayName = "ResizableTextarea";

export { ResizableTextarea };