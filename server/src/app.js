const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const authRoutes=require('./routes/auth.routes')
const cors=require('cors');
const connectDB=require('./config/db')


const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/ai", aiRoutes);
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Hey AI Reviewer Is Going To Start !!!");
});



module.exports = app;
