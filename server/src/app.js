const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey AI Reviewer Is Going To Start !!!");
});

app.use("/ai", aiRoutes);

module.exports = app;
