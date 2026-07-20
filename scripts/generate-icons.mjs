import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sourcePath = join(root, "public/images/brand/c-favicon-source.png");

const BLACK = { r: 0, g: 0, b: 0, alpha: 1 };
const RESIZE = { fit: "contain", background: BLACK, kernel: sharp.kernel.lanczos3 };

async function renderIcon(size, { padding = 0 } = {}) {
  if (padding === 0) {
    return sharp(sourcePath).resize(size, size, RESIZE);
  }

  const padPx = Math.round(size * padding);
  const inner = size - padPx * 2;
  const mark = await sharp(sourcePath)
    .resize(inner, inner, RESIZE)
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: BLACK },
  }).composite([{ input: mark, left: padPx, top: padPx }]);
}

async function writeIcon(size, outputPath, options) {
  await mkdir(dirname(outputPath), { recursive: true });
  const image = await renderIcon(size, options);
  await image.png().toFile(outputPath);
}

async function writeFavicon(outputPath) {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) => renderIcon(size).then((img) => img.png().toBuffer())),
  );

  const { default: pngToIco } = await import("png-to-ico");
  const ico = await pngToIco(pngBuffers);
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
      { padding: 0.12 },
    ],
    [32, join(root, "src/app/icon.png")],
    [180, join(root, "src/app/apple-icon.png")],
    [180, join(root, "public/apple-touch-icon.png")],
    [180, join(root, "public/icons/apple-touch-icon.png")],
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
