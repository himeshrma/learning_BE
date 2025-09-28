const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://0.0.0.0/YT_BE").then(() => {
  console.log("Connected to MongoDB");
});
