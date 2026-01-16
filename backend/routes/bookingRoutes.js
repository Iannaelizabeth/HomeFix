const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ success: true, booking });
  } catch (err) {
    console.error("❌ Error saving booking:", err);
    res.status(500).json({ message: "Error saving booking" });
  }
});

// GET BOOKINGS BY USER EMAIL
router.get("/:email", async (req, res) => {
  try {
    const bookings = await Booking.find({
      userEmail: req.params.email, // 🔥 IMPORTANT FIX
    });

    res.json(bookings);
  } catch (err) {
    console.error("❌ Error fetching bookings:", err);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

module.exports = router;
