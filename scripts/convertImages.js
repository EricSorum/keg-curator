import sharp from "sharp";
import fs from "fs";
import fsp from "fs/promises";
import path from "path";

const inputFolder = "./raw-images";
const outputFolder = "./public/brewery-logos";

// async function getData() {
//   const filePath = path.join(process.cwd(), './scripts/data/beerjson.json');
//   const fileContent = await fsp.readFile(filePath, 'utf-8');
//   return JSON.parse(fileContent);
// }

async function convertImages() {
  if (!fs.existsSync(outputFolder || !fs.existsSync(inputFolder))) {
    console.error('Requires /raw-images and /public/brewery-logos folders')
    return
  }
  // const data = await getData();
  // console.log(data[0]);

  const rawImages = await fsp.readdir(inputFolder);

  for (let i = 0; i < rawImages.length; i++) {

    const fileName = rawImages[i];
    const ext = path.extname(fileName).toLowerCase();


    if (![".jpg", ".jpeg", ".png", ".gif", ".avif", ".svg"].includes(ext)) {
      console.error("Requires jpb, jpeg, png, gif, or avif format")
      continue;
    }

    // still need to find way to make file names match brewery names

    const inputPath = path.join(inputFolder, fileName);
    const outputPath = path.join(outputFolder, `${path.parse(fileName).name}.webp`);
    try {
      await sharp(inputPath)
        .resize({ width: 100 })
        .webp({ quality: 80 })
        .toFile(outputPath)     
        console.log(`Converted ${fileName} to ${path.parse(fileName).name}.webp`);
    } catch (err) {
      console.error(`Error converting $file: `, err)
    }
  }

}

convertImages();