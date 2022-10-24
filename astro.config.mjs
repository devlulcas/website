import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import localImageResolver from "./local-image-resolver";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: localImageResolver,
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [svelte()],
});
