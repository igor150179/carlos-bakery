import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const monogramPath = join(root, "public/images/brand/c-monogram.png");

const CREAM = { r: 251, g: 248, b: 243, alpha: 1 };
const CARLO_RED = { r: 200, g: 16, b: 46, alpha: 1 };

async function renderIcon(size, { bg = CREAM, padding = 0.14 } = {}) {
  const padPx = Math.round(size * padding);
  const box = size - padPx * 2;
  const cHeight = Math.round(box * 0.9);
  const cBuffer = await sharp(monogramPath)
    .resize(null, cHeight, { fit: "inside" })
    .toBuffer();
  const meta = await sharp(cBuffer).metadata();
  const left = Math.round((size - (meta.width ?? 0)) / 2);
  const top = Math.round((size - (meta.height ?? 0)) / 2);

  return sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  }).composite([{ input: cBuffer, left, top }]);
}

async function writeIcon(size, outputPath, options) {
  await mkdir(dirname(outputPath), { recursive: true });
  const image = await renderIcon(size, options);
  await image.png().toFile(outputPath);
}

async function writeFavicon(outputPath) {
  const image16 = await renderIcon(16);
  const image32 = await renderIcon(32);
  const png16 = await image16.png().toBuffer();
  const png32 = await image32.png().toBuffer();

  const { default: pngToIco } = await import("png-to-ico");
  const ico = await pngToIco([png16, png32]);
  await writeFile(outputPath, ico);
}

async function main() {
  const targets = [
    [16, join(root, "public/icons/icon-16.png")],
    [32, join(root, "public/icons/icon-32.png")],
    [192, join(root, "public/icons/icon-192.png")],
    [512, join(root, "public/icons/icon-512.png")],
    [
      512,
      join(root, "public/icons/icon-512-maskable.png"),
      { bg: CREAM, padding: 0.24 },
    ],
    [32, join(root, "src/app/icon.png")],
    [180, join(root, "src/app/apple-icon.png")],
  ];

  for (const [size, outputPath, options] of targets) {
    await writeIcon(size, outputPath, options);
    console.log(`✓ ${outputPath.replace(root, "")}`);
  }

  await writeFavicon(join(root, "src/app/favicon.ico"));
  console.log("✓ /src/app/favicon.ico");

  await writeFavicon(join(root, "public/favicon.ico"));
  console.log("✓ /public/favicon.ico");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
