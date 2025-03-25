import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Code2, LogOut } from 'lucide-react';
import ThemeToggle from './ToggleTheme';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="fixed w-full backdrop-blur-sm bg-gray-900/50 dark:bg-gray-900/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Code Reviewer</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <span className="text-gray-300">
                  Welcome, <span className="text-blue-400">{user.name}</span>
                </span>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-150"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;