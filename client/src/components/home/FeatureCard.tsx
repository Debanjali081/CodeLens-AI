
import React from "react";
import { LucideIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  color: {
    light: string;
    dark: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
  color
}) => {
  const { isDark } = useTheme();
  
  return (
    <motion.div 
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`${
        isDark 
          ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/50' 
          : 'bg-white/80 backdrop-blur-md shadow-xl border border-blue-100/50'
      } rounded-2xl p-8 transition-all duration-300`}
    >
      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${
        isDark ? color.dark : color.light
      } flex items-center justify-center mb-6 shadow-lg`}>
        <div className="text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;