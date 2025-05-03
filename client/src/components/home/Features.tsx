import React from "react";
import { Sparkles, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Code Analysis",
    description: "Get detailed insights and suggestions to improve your code quality and maintainability.",
    icon: Sparkles,
    color: { 
      light: "from-blue-500 to-cyan-500", 
      dark: "from-blue-600 to-cyan-600" 
    }
  },
  {
    title: "Peer Reviews",
    description: "Connect with experienced developers for thorough code reviews and collaborative feedback.",
    icon: Star,
    color: { 
      light: "from-emerald-500 to-teal-500", 
      dark: "from-emerald-600 to-teal-600" 
    }
  },
  {
    title: "Best Practices",
    description: "Learn and implement industry-standard coding practices that elevate your development skills.",
    icon: Shield,
    color: { 
      light: "from-purple-500 to-indigo-500", 
      dark: "from-purple-600 to-indigo-600" 
    }
  }
];

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Powerful Features for Developers</h2>
        <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
            color={feature.color}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Features;