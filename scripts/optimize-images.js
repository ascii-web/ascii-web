const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

// Configuration
const config = {
  inputDir: "./public",
  outputDir: "./public/images/optimized",
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

async function optimizeImage(inputPath, filename, relativePath = "") {
  const ext = path.extname(filename).toLowerCase();
  const name = path.basename(filename, ext);

  // Skip SVG files
  if (ext === ".svg") {
    // Copy SVG files directly to each size directory maintaining structure
    for (const size of config.sizes) {
      const outputPath = path.join(config.outputDir, `${size}`, relativePath);
      await ensureDirectoryExists(outputPath);
      await fs.copyFile(inputPath, path.join(outputPath, filename));
    }
    return;
  }

  // Process other image types
  for (const size of config.sizes) {
    const outputPath = path.join(config.outputDir, `${size}`, relativePath);
    await ensureDirectoryExists(outputPath);

    try {
      // Original format
      await sharp(inputPath)
        .resize(size, size, {
          fit: "cover",
          position: "center",
        })
        .toFile(path.join(outputPath, filename));

      // WebP format
      await sharp(inputPath)
        .resize(size, size, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: 80 })
        .toFile(path.join(outputPath, `${name}.webp`));
    } catch (error) {
      console.error(`Error processing ${filename} at size ${size}:`, error);
    }
  }
}

async function processDirectory(directory, baseDir = "") {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    const relativePath = directory
      .replace(config.inputDir, "")
      .replace(/^[\/\\]/, "");

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        // Skip the optimized directory to avoid reprocessing
        if (entry.name !== "optimized") {
          await processDirectory(fullPath, config.inputDir);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (config.imageTypes.includes(ext)) {
          console.log(`Optimizing: ${relativePath}/${entry.name}`);
          await optimizeImage(fullPath, entry.name, relativePath);
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
