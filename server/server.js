import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import connectDB from "./config/db.js"; 
import categoryRoutes from "./routes/categories.js";


dotenv.config();

// ✅ ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect call
connectDB();

// ✅ Auth Routes
app.use("/api", authRoutes);
app.use("/api/categories", categoryRoutes);

// ✅ Static files serve
app.use("/images", express.static(path.join(__dirname, "public", "images")));
app.use("/data", express.static(path.join(__dirname, "data", "pedhe_json")));

// ✅ JSON file paths
const ordersPath = path.join(__dirname, "data", "past_orders_json");
const productsPath = path.join(__dirname, "data", "products_json");
const categoriesPath = path.join(__dirname, "data", "pedhe_json");

// ✅ Utility function (safe JSON read)
function readJSON(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
    } else {
      return [];
    }
  } catch (err) {
    console.error("❌ Error reading JSON:", err);
    return [];
  }
}

// ✅ Dialogflow Webhook endpoint
app.post("/api/dialogflow", (req, res) => {
  const intent = req.body.queryResult?.intent?.displayName;
  let reply = "Maaf kijiye, mujhe samajh nahi aaya.";

  switch (intent) {
    case "Product Info": {
      const products = readJSON(productsPath);
      if (products.length > 0) {
        reply = `Abhi hamare paas ${products.length} products available hain. Example: ${products[0].name} ₹${products[0].price} me.`;
      } else {
        reply = "Maaf kijiye, abhi products ki list available nahi hai.";
      }
      break;
    }

    case "Order Tracking": {
      const orders = readJSON(ordersPath);
      if (orders.length > 0) {
        reply = `Aapke last order ka status: ${orders[0].status}, date: ${orders[0].date}`;
      } else {
        reply = "Abhi aapke koi order record nahi mile.";
      }
      break;
    }

    default:
      reply = "Maaf kijiye, mujhe samajh nahi aaya.";
  }

  // ✅ Dialogflow response
  res.json({ fulfillmentText: reply });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Chatbot running at http://localhost:${PORT}`);
});
