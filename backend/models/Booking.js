const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    userEmail: String,

    service: String,
    workerId: String,
    workerName: String,

    date: String,
    time: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
