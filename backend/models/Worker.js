const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  service: String,
  experience: String,
  rating: Number,
  about: String,
});

module.exports = mongoose.model("Worker", workerSchema);
