import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Code2, LogIn, UserPlus, LogOut, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-white via-blue-50/50 to-blue-50'
    } ${isDark ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
      <Header />
      
      {/* Main Content */}
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
              alt="Code background"
              className={`w-full h-full object-cover ${isDark ? 'opacity-10' : 'opacity-5'}`}
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-20 pb-12 md:pt-32 md:pb-20">
              <div className="text-center">
                <Code2 className={`h-16 w-16 mx-auto mb-8 ${isDark ? 'text-blue-400' : 'text-sky-600'}`} />
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                  Welcome to Code Reviewer
                </h1>
                <p className={`max-w-2xl mx-auto text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Enhance your code quality with professional peer reviews and automated analysis
                </p>

                {user ? (
                  <div className="space-y-6">
                    <div className={`${
                      isDark 
                        ? 'bg-gray-800/50' 
                        : 'bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100'
                    } rounded-lg p-6 max-w-md mx-auto`}>
                      <p className="text-xl mb-6">Welcome back, <span className="font-semibold text-sky-600">{user.name}</span>!</p>
                      <div className="space-y-4">
                        <Link 
                          to="/code-reviewer"
                          className="group flex items-center justify-center w-full px-8 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
                        >
                          Access Code Reviewer
                          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
                        </Link>
                        <button
                          onClick={logout}
                          className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-150"
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
                      className="flex items-center px-8 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 min-w-[200px]"
                    >
                      <UserPlus className="mr-2 h-5 w-5" />
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className={`flex items-center px-8 py-3 text-lg font-medium rounded-lg ${
                        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      } transition-colors duration-150 min-w-[200px]`}
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
            {['blue', 'teal', 'purple'].map((color, index) => (
              <div key={index} className={`${
                isDark 
                  ? 'bg-gray-800/50' 
                  : 'bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-blue-100'
              } rounded-lg p-6 transition-all duration-200`}>
                <div className={`h-12 w-12 rounded-lg bg-${color}-500/10 flex items-center justify-center mb-4`}>
                  <Code2 className={`h-6 w-6 text-${color}-600`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {['Code Analysis', 'Peer Reviews', 'Best Practices'][index]}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {[
                    'Get detailed insights and suggestions to improve your code quality.',
                    'Connect with experienced developers for thorough code reviews.',
                    'Learn and implement industry-standard coding practices.'
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;