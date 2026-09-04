import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import dns from "dns";


dns.setServers(["8.8.8.8"]);

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000; 

//middleware
app.use(express.json());
app.use(cors());


connectDB();

//api endpoints
app.get("/", (req, res) => {
  res.send("API is working!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});