const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const http = require("http");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
require("dotenv").config();
app.use(cors());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("Server listening on PORT: ", process.env.PORT);
  connectToMongoDB();
});

module.exports = server;
