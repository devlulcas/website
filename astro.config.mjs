import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import localImageResolver from "./local-image-resolver";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: localImageResolver,
  },
  site: "https://devlulcas-github-io.vercel.app/",
  integrations: [svelte(), sitemap(), robotsTxt()],
  output: "server",
  adapter: vercel(),
});
