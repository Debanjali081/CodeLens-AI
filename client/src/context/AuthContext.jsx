import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_AUTH_API}/login`, {
        email,
        password,
      });
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["x-auth-token"];
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
