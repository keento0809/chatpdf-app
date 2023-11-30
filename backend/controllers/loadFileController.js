const axios = require("axios");
const { config } = require("../config");

const data = {
  url: "https://thejino.com/wp-content/uploads/2023/11/Reference_Ecommerce_Site.pdf",
};

const loadFile = async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.chatpdf.com/v1/sources/add-url",
      data,
      config
    );
    res.status(200).json({ sourceId: response.data.sourceId });
  } catch (error) {
    res.status(400).json("Error!");
  }
};

module.exports = {
  loadFile,
};
