import React from 'react';
import { Code2, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Code Reviewer</span>
            </div>
            <p className="text-gray-400 mb-4">
              Enhance your code quality with professional peer reviews and automated analysis.
              Join our community of developers committed to writing better code.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-blue-400 transition-colors duration-150">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-blue-400 transition-colors duration-150">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-150"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-150"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Code Reviewer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;