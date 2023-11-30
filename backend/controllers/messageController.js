const axios = require("axios");
const { config } = require("../config");

const loadNewMessage = async (req, res) => {
  const requestBody = req.body;

  const data = {
    referenceSources: true,
    ...requestBody,
  };
  try {
    const response = await axios.post(
      "https://api.chatpdf.com/v1/chats/message",
      data,
      config
    );
    res.status(200).json({ data: response.data.content });
  } catch (error) {
    res.status(400).json("Error!");
  }
};

module.exports = {
  loadNewMessage,
};
