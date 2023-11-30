const express = require("express");
const { loadFile } = require("../controllers/loadFileController");
const router = express.Router();

router.post("/", loadFile);

module.exports = router;
