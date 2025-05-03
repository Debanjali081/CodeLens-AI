import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Code2, LogIn, UserPlus, LogOut, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDark } = useTheme();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Code background"
          className={`w-full h-full object-cover ${isDark ? 'opacity-10' : 'opacity-5'}`}
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="pt-20 pb-12 md:pt-32 md:pb-20">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className={`h-20 w-20 mx-auto mb-8 p-4 rounded-2xl ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'} backdrop-blur-sm border ${isDark ? 'border-blue-800' : 'border-blue-100'}`}
            >
              <Code2 className={`h-full w-full ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
            >
              Welcome to Code Reviewer
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`max-w-2xl mx-auto text-xl mb-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Enhance your code quality with professional peer reviews and automated analysis
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {user ? (
                <AuthenticatedActions user={user} logout={logout} isDark={isDark} />
              ) : (
                <UnauthenticatedActions isDark={isDark} />
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AuthenticatedActions = ({ user, logout, isDark }: { user: any, logout: () => void, isDark: boolean }) => (
  <div className="space-y-6">
    <div className={`${
      isDark 
        ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
        : 'bg-white/80 backdrop-blur-md shadow-xl border border-blue-100'
      } rounded-2xl p-8 max-w-md mx-auto transform hover:scale-[1.01] transition-all duration-300`}
    >
      <p className="text-xl mb-6">
        Welcome back, <span className={`font-semibold ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>{user.name}</span>!
      </p>
      <div className="space-y-4">
        <Link 
          to="/code-reviewer"
          className="group flex items-center justify-center w-full px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          Access Code Reviewer
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        <button
          onClick={logout}
          className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  </div>
);

const UnauthenticatedActions = ({ isDark }: { isDark: boolean }) => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
    <Link
      to="/register"
      className="flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 min-w-[220px]"
    >
      <UserPlus className="mr-2 h-5 w-5" />
      Register
    </Link>
    <Link
      to="/login"
      className={`flex items-center px-8 py-4 text-lg font-medium rounded-xl ${
        isDark 
          ? 'bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm border border-white/10' 
          : 'bg-white hover:bg-gray-50 text-gray-800 shadow-lg border border-gray-100'
      } transition-all duration-300 min-w-[220px]`}
    >
      <LogIn className="mr-2 h-5 w-5" />
      Login
    </Link>
  </div>
);

export default Hero;