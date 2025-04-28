import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on app load
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Set auth token header
          axios.defaults.headers.common["x-auth-token"] = token;
          
          // Verify token is valid (you would need to implement this endpoint)
          const res = await axios.get(`${import.meta.env.VITE_AUTH_API}/auth/verify`);
          
          if (res.data.user) {
            setUser(res.data.user);
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["x-auth-token"];
          }
        } catch (err) {
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["x-auth-token"];
        }
      }
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  // Register user with email/password
  const register = async (name, email, password) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_AUTH_API}/register`,
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      
      toast.success("Registration successful! Please log in.");
      return true;
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Registration failed";
      toast.error(errorMsg);
      throw { msg: errorMsg };
    }
  };

  // Login with email/password
  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_AUTH_API}/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, user } = res.data;

      // Set token to localStorage
      localStorage.setItem("token", token);
      
      // Set token in axios headers
      axios.defaults.headers.common["x-auth-token"] = token;
      
      setUser(user);
      setIsAuthenticated(true);
      toast.success("Login successful!");
      return true;
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Login failed";
      toast.error(errorMsg);
      throw { msg: errorMsg };
    }
  };

  // Google Auth
  const googleAuth = async (credential) => {
    try {
      if (!credential) {
        throw new Error('No credential received from Google');
      }

      const res = await axios.post(
        `${import.meta.env.VITE_AUTH_API}/auth/google`,
        { credential },
        { 
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          withCredentials: true // Add this line
        }
      );

      const { token, user } = res.data;
      
      if (!token || !user) {
        throw new Error('Invalid response from server');
      }

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = token;
      setUser(user);
      setIsAuthenticated(true);
      toast.success("Google login successful!");
      return true;
    } catch (err) {
      console.error('Google auth error:', err);
      const errorMsg = err.response?.data?.msg || err.message || "Google authentication failed";
      toast.error(errorMsg);
      throw { msg: errorMsg };
    }
  };

  // Logout
  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    
    // Remove token from axios headers
    delete axios.defaults.headers.common["x-auth-token"];
    
    setUser(null);
    setIsAuthenticated(false);
    toast.info("You have been logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        register,
        login,
        googleAuth,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};