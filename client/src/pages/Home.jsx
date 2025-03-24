import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Code2, LogIn, UserPlus, LogOut, ChevronRight } from "lucide-react";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
            alt="Code background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-12 md:pt-32 md:pb-20">
            <div className="text-center">
              <Code2 className="h-16 w-16 mx-auto mb-8 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Welcome to Code Reviewer
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
                Enhance your code quality with professional peer reviews and automated analysis
              </p>

              {user ? (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                    <p className="text-xl mb-6">Welcome back, <span className="font-semibold text-blue-400">{user.name}</span>!</p>
                    <div className="space-y-4">
                      <Link 
                        to="/code-reviewer"
                        className="group flex items-center justify-center w-full px-8 py-3 text-lg font-medium rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-150"
                      >
                        Access Code Reviewer
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium rounded-lg bg-red-500/80 hover:bg-red-600 transition-colors duration-150"
                      >
                        <LogOut className="mr-2 h-5 w-5" />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/register"
                    className="flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-150 min-w-[200px]"
                  >
                    <UserPlus className="mr-2 h-5 w-5" />
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-150 min-w-[200px]"
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Code Analysis</h3>
            <p className="text-gray-400">Get detailed insights and suggestions to improve your code quality.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <div className="h-12 w-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Peer Reviews</h3>
            <p className="text-gray-400">Connect with experienced developers for thorough code reviews.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
            <p className="text-gray-400">Learn and implement industry-standard coding practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;