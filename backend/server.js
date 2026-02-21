import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Skillhire is running.");
});
const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
