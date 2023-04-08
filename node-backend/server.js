import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/main.js";

dotenv.config();

morgan("tiny");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("tiny"));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

app.use("/", router);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
