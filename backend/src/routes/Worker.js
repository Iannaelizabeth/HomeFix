import express from "express";
import Worker from "../models/Worker.js"; // your MongoDB model
const router = express.Router();

// POST /api/workers → register new worker
router.post("/", async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(201).json({ message: "Worker registered successfully", worker });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/workers/:service → get workers for a service
router.get("/:service", async (req, res) => {
  try {
    const { service } = req.params;
    const workers = await Worker.find({ service: service.toLowerCase() });
    res.json(workers);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
