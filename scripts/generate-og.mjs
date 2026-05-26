// Generate the social share image at public/brand/og-default.png.
//
// Composition: brand yellow surface (#F9C219), the hero headline
// "Focused companies. Carefully built." in Newsreader, then the
// full horizontal needle below. 1200x630 — the universal OG size.
//
// Run with: node scripts/generate-og.mjs

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const FONT_REGULAR_URL =
  "https://cdn.jsdelivr.net/fontsource/fonts/newsreader@latest/latin-400-normal.ttf";
const FONT_ITALIC_URL =
  "https://cdn.jsdelivr.net/fontsource/fonts/newsreader@latest/latin-400-italic.ttf";

async function fetchFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font: ${url} (${res.status})`);
  return Buffer.from(await res.arrayBuffer());
}

async function readImageDataURL(relPath) {
  const buf = await readFile(path.join(root, relPath));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

const [fontRegular, fontItalic, needleSrc] = await Promise.all([
  fetchFont(FONT_REGULAR_URL),
  fetchFont(FONT_ITALIC_URL),
  readImageDataURL("public/brand/highstack-needle-full-black.png"),
]);

// Tree describing the OG card. satori uses JSX-style objects.
const tree = {
  type: "div",
  props: {
    style: {
      width: `${WIDTH}px`,
      height: `${HEIGHT}px`,
      background: "#F9C219",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 96px",
      fontFamily: "Newsreader",
      color: "#0A0A0A",
    },
    children: [
      {
        type: "div",
        props: {
          style: {
            fontSize: 116,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            display: "flex",
          },
          children: "Focused companies.",
        },
      },
      {
        type: "div",
        props: {
          style: {
            fontSize: 116,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            fontStyle: "italic",
            color: "#2A2A2A",
            marginTop: 8,
            display: "flex",
          },
          children: "Carefully built.",
        },
      },
      {
        type: "img",
        props: {
          src: needleSrc,
          width: 720,
          height: 56,
          style: { marginTop: 48 },
        },
      },
    ],
  },
};

const svg = await satori(tree, {
  width: WIDTH,
  height: HEIGHT,
  fonts: [
    { name: "Newsreader", data: fontRegular, weight: 400, style: "normal" },
    { name: "Newsreader", data: fontItalic, weight: 400, style: "italic" },
  ],
});

const png = new Resvg(svg, {
  fitTo: { mode: "width", value: WIDTH },
}).render().asPng();

const outPath = path.join(root, "public/brand/og-default.png");
await writeFile(outPath, png);

console.log(`Wrote ${outPath} — ${png.length} bytes (${WIDTH}x${HEIGHT})`);
