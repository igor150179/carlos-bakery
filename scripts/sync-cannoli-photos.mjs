import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets =
  "/Users/igoroliveira/.cursor/projects/Users-igoroliveira-projetos-CarlosBakery/assets";
const menuDir = join(root, "public/images/menu");

const copies = [
  ["0804-Edit-7433302b-1ff2-4637-baac-cfb83fe61b61.png", "cannoli-cioccolato-chip.png"],
  ["0804-Edit-7433302b-1ff2-4637-baac-cfb83fe61b61.png", "cannoli-cioccolato.png"],
  [
    "0817-Edit-Edit-879b9146-00f6-404c-9be3-9a46721c361a.png",
    "cannoli-fondente-crema.png",
  ],
];

for (const [source, target] of copies) {
  copyFileSync(join(assets, source), join(menuDir, target));
  console.log(`copied ${target}`);
}
