const fs = require('fs');
const path = require('path');

// Directory containing the JSON files
const jsonDir = path.join(__dirname, 'data', 'pedhe_json');

// Function to fix image paths in a JSON file
function fixImagePaths(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.Categories && Array.isArray(data.Categories)) {
      data.Categories.forEach(product => {
        if (product.image) {
          // Replace incorrect paths with correct ones
          // Remove "/Pedhe-Wale" prefix if present
          product.image = product.image.replace(/^\/Pedhe-Wale\/images\//, '/images/');
          // If it's just a filename, assume it's in the classic_pedas folder (for backward compatibility)
          if (!product.image.startsWith('/images/')) {
            product.image = `/images/classic_pedas/${product.image}`;
          }
          // Fix paths that start with /classic_pedas/ etc. to /images/classic_pedas/
          product.image = product.image.replace(/^\/([^\/]+)\//, '/images/$1/');
        }
      });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Fixed image paths in ${filePath}`);
  } catch (err) {
    console.error(`Error fixing ${filePath}:`, err);
  }
}

// Get all JSON files in the directory
fs.readdirSync(jsonDir).forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(jsonDir, file);
    fixImagePaths(filePath);
  }
});

console.log('All image paths fixed!');
