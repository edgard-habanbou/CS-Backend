const express = require("express");
const bodyParser = require("body-parser");

const { connectToMongoDB } = require("./configs/connection");
const http = require("http");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
app.use(cors());

// Routes for the book
const bookRoutes = require("./routes/book.routes");
app.use("/api", bookRoutes);

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("Server listening on PORT: ", process.env.PORT);
  connectToMongoDB();
});

module.exports = server;
