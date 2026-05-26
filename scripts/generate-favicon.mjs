// Generate the favicon + apple-touch-icon from brand assets.
//
// Composition: brand yellow square, short needle centered.
// iOS/Safari round the square into a circle on display; browsers
// that don't (Linux/older Windows) get a clean yellow square.
//
// Run with: node scripts/generate-favicon.mjs

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const YELLOW = { r: 0xf9, g: 0xc2, b: 0x19, alpha: 1 };

// Render at high res; browsers downscale for tabs.
const SIZE = 512;
// Needle takes ~62% of canvas height so the eye + shaft both breathe.
const NEEDLE_H = Math.round(SIZE * 0.62);

const needleSrc = path.join(root, "public/brand/highstack-needle-short-black.png");
const needleResized = await sharp(needleSrc)
  .resize({ height: NEEDLE_H, withoutEnlargement: false })
  .toBuffer();
const { width: needleW, height: needleH } = await sharp(needleResized).metadata();

const composite = await sharp({
  create: {
    width: SIZE,
    height: SIZE,
    channels: 4,
    background: YELLOW,
  },
})
  .composite([
    {
      input: needleResized,
      top: Math.round((SIZE - needleH) / 2),
      left: Math.round((SIZE - needleW) / 2),
    },
  ])
  .png()
  .toBuffer();

// 256px for favicon.png (browsers downscale to 32 cleanly)
await sharp(composite)
  .resize(256, 256)
  .toFile(path.join(root, "public/favicon.png"));

// 256px for apple-touch-icon (iOS uses 180/256/512 — 256 covers common sizes)
await sharp(composite)
  .resize(256, 256)
  .toFile(path.join(root, "public/apple-touch-icon.png"));

console.log("Wrote public/favicon.png and public/apple-touch-icon.png (256x256)");
