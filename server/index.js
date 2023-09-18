
const express = require("express");
const mainRouter = require("./routes/mainRouter");
const server = express();
const morgan = require("morgan");

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server raised on port: ${PORT}`);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(morgan("dev"));

//http://localhost:3001/D&Dcharts
server.use("/D&Dcharts", mainRouter);

module.exports = server;
