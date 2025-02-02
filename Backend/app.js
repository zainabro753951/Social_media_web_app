import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
let PORT = process.env.port || 4500;
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () =>
  console.log(`listening on ${PORT} http://localhost:${PORT}`)
);
