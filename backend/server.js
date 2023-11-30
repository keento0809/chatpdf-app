const express = require("express");
const loadFileRouter = require("./routers/loadFileRouter");
const messageRouter = require("./routers/messageRouter");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/loadFile", loadFileRouter);
app.use("/message", messageRouter);

app.listen(8000, () => {
  console.log("Server running");
});
