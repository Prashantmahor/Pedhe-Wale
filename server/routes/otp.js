import express from "express";
import User from "../models/User.js";
import { authMiddleware } from "../middlewares/Authentication.js";
import otpGenerator from "otp-generator";

const router = express.Router();

let otpStore = {}; // memory store, production me Redis ya DB use karo
// Send OTP
router.post("/send-otp", authMiddleware, async (req, res) => {
  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

  otpStore[req.user] = otp; // <-- yaha sirf req.user hoga

  console.log("OTP:", otp); // console me demo OTP
  res.json({ message: "OTP sent to your phone number (check console for demo)" });
});

// Verify OTP
router.post("/verify-otp", authMiddleware, async (req, res) => {
  const { otp } = req.body;

  if (!otpStore[req.user] || otpStore[req.user] !== otp) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  await User.findByIdAndUpdate(req.user, { isPhoneVerified: true });
  delete otpStore[req.user];

  res.json({ message: "Phone verified successfully ✅" });
});

export default router;
