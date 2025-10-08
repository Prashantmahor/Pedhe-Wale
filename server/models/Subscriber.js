// models/Subscriber.js
import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt auto-save honge
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;