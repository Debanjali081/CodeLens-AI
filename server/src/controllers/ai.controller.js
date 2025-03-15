const generateContent = require("../services/ai.service");
const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send("No Prompt Provided");
  }
  const response = await aiService(prompt);

  res.send(response);
};
