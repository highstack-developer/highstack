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

// Render at high res; browsers downscale for tabs.
const SIZE = 512;
// Disc takes 88% of the canvas — leaves clear transparent padding so the
// circular shape reads at small favicon sizes (16-32px) where an inscribed
// disc would look like a yellow square.
const DISC_RADIUS = Math.round(SIZE * 0.44);
// Needle sized off the disc, not the canvas, so it scales with the disc.
const NEEDLE_H = Math.round(DISC_RADIUS * 2 * 0.62);

const needleSrc = path.join(root, "public/brand/highstack-needle-short-black.png");
const needleResized = await sharp(needleSrc)
  .resize({ height: NEEDLE_H, withoutEnlargement: false })
  .toBuffer();
const { width: needleW, height: needleH } = await sharp(needleResized).metadata();

// Yellow disc on a transparent canvas — drawn as SVG so the corners
// outside the circle stay alpha=0.
const discSvg = Buffer.from(`
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${DISC_RADIUS}" fill="#F9C219"/>
</svg>
`);

const composite = await sharp(discSvg)
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
