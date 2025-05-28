const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser'); // Add this

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser()); // Add cookie parser middleware

// CORS Configuration - Update this
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'] // Add x-auth-token here
}));

// Routes
app.use("/ai", aiRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hey AI Reviewer Is Going To Start !!!");
});

module.exports = app;