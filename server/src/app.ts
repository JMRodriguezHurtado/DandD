import express from "express";
import mainRouter from "./routes/mainRouter";
const app = express();
import morgan from "morgan";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(morgan("dev"));

// http://localhost:3001/D&Dcharts
app.use("/D&Dcharts", mainRouter);

export default app;