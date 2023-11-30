const express = require("express");
const { loadNewMessage } = require("../controllers/messageController");
const router = express.Router();

router.post("/", loadNewMessage);

module.exports = router;
