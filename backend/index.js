const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connection SUCCESS");
  } catch (err) {
    console.log(err);
  }
};

//middleware
dotenv.config();

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
