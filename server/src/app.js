const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "https://codelens-ai.onrender.com", 
  credentials: true, 
};
// CORS Configuration
app.use(
  cors(corsOptions)
);

// Routes

const clientDistPath = path.join(__dirname, '..', '..', 'client', 'dist');

app.use("/ai", aiRoutes);
app.use("/api/auth", authRoutes);

// Serve static files from the client/dist directory
app.use(express.static(clientDistPath));

// Serve index.html for all other routes (for client-side routing)
app.get("*", (_, res) => {
  res.sendFile(path.resolve(clientDistPath, 'index.html'));
});

app.get("/", (req, res) => {
  res.send("Hey AI Reviewer Is Going To Start !!!");
});

module.exports = app;

