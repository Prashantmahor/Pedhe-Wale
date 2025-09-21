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
          // Remove "/Pedhe-Wale/images/" prefix if present
          product.image = product.image.replace(/^\/Pedhe-Wale\/images\//, '/images/');
          // Remove any leading slash if path starts with /classic_pedas/ or other folder
          product.image = product.image.replace(/^\/(classic_pedas|exotic_&_gourmet_pedas|fruit-based_pedas|health-conscious_pedas|modern_fusion_pedas|nutty_&_dry_fruit_pedas|seasonal_&_festival_special_pedas)\//, '/images/$1/');
          // If it's just a filename without any path, assume classic_pedas folder
          if (!product.image.startsWith('/images/')) {
            product.image = `/images/classic_pedas/${product.image}`;
          }
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
