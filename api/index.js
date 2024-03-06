import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
ahehasbad