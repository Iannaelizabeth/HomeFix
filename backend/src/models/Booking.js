import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },

    service: { type: String, required: true },       // e.g. plumber
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: "Worker" },
    workerName: { type: String },

    date: { type: String, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
