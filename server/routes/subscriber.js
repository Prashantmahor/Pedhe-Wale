// routes/subscriber.js
import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// POST: Subscribe
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSub = new Subscriber({ email });
    await newSub.save();

    res.json({ message: "✅ Subscription successful!" });
  } catch (err) {
    console.error("❌ Subscribe error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// (Optional) GET: All subscribers (admin use only)
router.get("/", async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching subscribers" });
  }
});

export default router;