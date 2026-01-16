import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },      // plumber, carpenter, etc.
  experience: { type: String, required: true },   // "3 years"
  rating: { type: Number, default: 4.5 },
  about: { type: String, required: true },
});

export default mongoose.model("Worker", workerSchema);
