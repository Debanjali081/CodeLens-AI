const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).send("No Prompt Provided");
  }
  const response = await aiService(prompt);

  res.send(response);
};
