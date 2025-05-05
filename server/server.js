import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 4000;

await connectDB();

//allow multiple origins
const allowedOrigins = ["http://localhost:5173"];

// middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.get("/", (_, res) => res.send("API is working..."));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
