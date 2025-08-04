const { imageSize } = require('image-size');
const fs = require('fs');
const path = require('path');

const galleryDir = './public/images/gallery';
const images = [];

// Read all files from gallery directory
const files = fs.readdirSync(galleryDir).filter(file => 
  /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
);

files.forEach(file => {
  try {
    const filePath = path.join(galleryDir, file);
    const buffer = fs.readFileSync(filePath);
    const dimensions = imageSize(buffer);
    
    images.push({
      src: `/images/gallery/${file}`,
      width: dimensions.width,
      height: dimensions.height
    });
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

// Sort images by filename to match original order
images.sort((a, b) => a.src.localeCompare(b.src));

// Generate the constants file content
const constantsContent = `export const GALLERY_IMAGES = [
${images.map(img => 
  `  {\n    src: '${img.src}',\n    width: ${img.width},\n    height: ${img.height}\n  }`
).join(',\n')}
];
`;

console.log(constantsContent); 