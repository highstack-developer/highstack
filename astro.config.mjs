import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.highstack.ca",
  output: "static",
  integrations: [mdx(), react(), sitemap()],
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
