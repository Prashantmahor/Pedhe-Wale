import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // ek hi email se multiple accounts nahi banenge
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // minimum 6 character ka password
    },
    phone: { type: String },     // optional initially
    address: { type: String },    // optional initially
    avatar: { type: String },     // optional initially
    isPhoneVerified: { type: Boolean, default: false }
  },
  { timestamps: true } // automatically createdAt & updatedAt save karega
);

const User = mongoose.model("User", userSchema);
export default User;