import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/30'
    } ${isDark ? 'text-white' : 'text-gray-800'} transition-colors duration-200 bg-fixed`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 relative z-10"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
