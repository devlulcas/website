/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 120,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
