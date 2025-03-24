import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import CodeReviewer from "./pages/CodeReviewer"; // Protected Page
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Route for Code Reviewer */}
          <Route element={<ProtectedRoute />}>
            <Route path="/code-reviewer" element={<CodeReviewer />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
