require("dotenv").config();

const config = {
  headers: {
    "x-api-key": process.env.API_KEY,
    "Content-Type": "application/json",
  },
};

module.exports = {
  config,
};
