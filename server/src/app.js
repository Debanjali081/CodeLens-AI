const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors=require('cors');


const app = express();
app.use(express.json());
app.use(cors());
app.use("/ai", aiRoutes);


app.get("/", (req, res) => {
  res.send("Hey AI Reviewer Is Going To Start !!!");
});



module.exports = app;
