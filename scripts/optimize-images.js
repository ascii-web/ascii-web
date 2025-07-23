const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

// Configuration
const config = {
  inputDir: "./public",
  outputDir: "./public/optimized",
  sizes: [48, 96, 128], // Simplified size set for avatars and logos
  imageTypes: [".jpg", ".jpeg", ".png", ".svg"],
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = path.basename(filename, ext);

  // Skip SVG files
  if (ext === ".svg") {
    // Copy SVG files directly
    const sizeDir = path.join(config.outputDir, "48");
    await ensureDirectoryExists(sizeDir);
    await fs.copyFile(inputPath, path.join(sizeDir, filename));
    return;
  }

  // Process other image types
  for (const size of config.sizes) {
    const sizeDir = path.join(config.outputDir, `${size}`);
    await ensureDirectoryExists(sizeDir);

    try {
      // Original format
      await sharp(inputPath)
        .resize(size, size, {
          fit: "cover",
          position: "center",
        })
        .toFile(path.join(sizeDir, filename));

      // WebP format
      await sharp(inputPath)
        .resize(size, size, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: 80 })
        .toFile(path.join(sizeDir, `${name}.webp`));
    } catch (error) {
      console.error(`Error processing ${filename} at size ${size}:`, error);
    }
  }
}

async function processDirectory(directory) {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        // Skip the optimized directory to avoid reprocessing
        if (entry.name !== "optimized") {
          await processDirectory(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (config.imageTypes.includes(ext)) {
          console.log(`Optimizing: ${entry.name}`);
          await optimizeImage(fullPath, entry.name);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory: ${error}`);
  }
}

async function main() {
  try {
    console.log("🖼️ Starting image optimization...");
    await ensureDirectoryExists(config.outputDir);
    await processDirectory(config.inputDir);
    console.log("✨ Image optimization complete!");
  } catch (error) {
    console.error("Error during image optimization:", error);
    process.exit(1);
  }
}

main();
