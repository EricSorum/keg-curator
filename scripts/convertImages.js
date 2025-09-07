import sharp from "sharp";
import fs from "fs";
import fsp from "fs/promises";
import path from "path";

const inputFolder = "./raw-images";
const outputFolder = "./public/brewery-logos";

async function convertImages() {
  if (!fs.existsSync(outputFolder || !fs.existsSync(inputFolder))) {
    console.error('Requires /raw-images and /public/brewery-logos folders')
    return
  }

  const rawImages = await fsp.readdir(inputFolder);

  for (let i = 0; i < rawImages.length; i++) {

    const fileName = rawImages[i];
    const ext = path.extname(fileName).toLowerCase();

    if(ext === ".webp") {
      continue;
    }

    if (![".jpg", ".jpeg", ".png", ".gif", ".avif", ".svg"].includes(ext)) {
      console.error("Requires jpb, jpeg, png, gif, or avif format")
      continue;
    }

    const inputPath = path.join(inputFolder, fileName);
    const outputPath = path.join(outputFolder, `${path.parse(fileName).name}.webp`);
    try {
      await sharp(inputPath)
        .resize({ width: 100 })
        // .resize({ height: 100 })
        .webp({ quality: 80 })
        .toFile(outputPath)     
        console.log(`Converted ${fileName} to ${path.parse(fileName).name}.webp`);
    } catch (err) {
      console.error(`Error converting $file: `, err)
    }
  }

}

convertImages();