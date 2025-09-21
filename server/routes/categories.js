// // routes/categories.js
// import express from "express";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const router = express.Router();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ✅ Utility function to safely read JSON
// function readJSON(filePath) {
//   try {
//     if (fs.existsSync(filePath)) {
//       return JSON.parse(fs.readFileSync(filePath, "utf8"));
//     } else {
//       return [];
//     }
//   } catch (err) {
//     console.error("❌ Error reading JSON:", err);
//     return [];
//   }
// }

// // ✅ API: Get products of a specific category
// router.get("/:category", (req, res) => {
//   const category = req.params.category; // e.g. "Classic Pedas"
//   const filePath = path.join(__dirname, "../data/pedhe_json", category, `${category}.json`);

//   if (fs.existsSync(filePath)) {
//     const data = readJSON(filePath);
//     res.json(data);
//   } else {
//     res.status(404).json({ error: "Category not found" });
//   }
// });

// export default router;

// routes/categories.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Utility function to safely read JSON
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

// ✅ API: Get products of a specific category
router.get("/:file", (req, res) => {
  const file = req.params.file; // e.g. "classic_pedas.json"
  const filePath = path.join(__dirname, "../data/pedhe_json", file);

  if (fs.existsSync(filePath)) {
    const data = readJSON(filePath);
    res.json(data);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

export default router;
