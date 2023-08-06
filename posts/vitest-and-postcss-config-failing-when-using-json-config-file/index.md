---
title: Vitest + PostCSS config failing when using poscssrc.json file
excerpt: Vitest + PostCSS config failing to load config with "Invalid PostCSS Plugin" when using poscssrc.json file
date: 31/05/2023
draft: false
categories:
  - none
tags:
  - test
  - vitest
  - postcss
  - error
  - poscssrc.json
  - invalid-postcss-plugin
---

# Solving Vitest + PostCSS config failing when using poscssrc.json file

![vitest](./vitest.svg)

When using a JSON file named `poscssrc.json` to configure PostCSS, Vitest fails to load the config with the following error:

```
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Failed to load PostCSS config: Failed to load PostCSS config (searchPath: /home/user/project): [TypeError] Invalid PostCSS Plugin found at: plugins[0]

(@/home/user/project/.postcssrc.json)
TypeError: Invalid PostCSS Plugin found at: plugins[0]

(@/home/user/project/.postcssrc.json)
    at file:///home/user/project/node_modules/.pnpm/vite@4.3.9_@types+node@18.15.5/node_modules/vite/dist/node/chunks/dep-e8f070e8.js:36382:15
    at Array.forEach (<anonymous>)
    at plugins (file:///home/user/project/node_modules/.pnpm/vite@4.3.9_@types+node@18.15.5/node_modules/vite/dist/node/chunks/dep-e8f070e8.js:36363:13)
    at processResult (file:///home/user/project/node_modules/.pnpm/vite@4.3.9_@types+node@18.15.5/node_modules/vite/dist/node/chunks/dep-e8f070e8.js:36427:14)
    at file:///home/user/project/node_modules/.pnpm/vite@4.3.9_@types+node@18.15.5/node_modules/vite/dist/node/chunks/dep-e8f070e8.js:36551:14
```

This is the config file:

```json:postcssrc.json
{
 "plugins": [
  "postcss-flexbugs-fixes",
  [
   "postcss-preset-env",
   {
    "autoprefixer": {
     "flexbox": "no-2009",
     "grid": true
    },
    "stage": 3,
    "features": {
     "nesting-rules": true,
     "custom-properties": false
    }
   }
  ]
 ]
}
```

This is the `package.json` file:

```json:package.json
{
 "name": "test-vitest-postcss",
 "version": "0.1.0",
 "private": true,
 "scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "vitest"
 },
 "dependencies": {
  "@types/node": "20.2.5",
  "@types/react": "18.2.7",
  "@types/react-dom": "18.2.4",
  "eslint": "8.41.0",
  "eslint-config-next": "13.4.4",
  "next": "13.4.4",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "typescript": "5.0.4"
 },
 "devDependencies": {
  "postcss": "^8.4.24",
  "postcss-flexbugs-fixes": "^5.0.2",
  "postcss-preset-env": "^8.4.1",
  "vitest": "^0.31.3"
 }
}
```

The solution? Simple... just rename the file to `postcss.config.json` and it will work.

```diff
- .postcssrc.json
+ postcss.config.json
```

And that's it! Now Vitest will be able to load the config file without any issues.

You can try a better way to use a `.json` config file with PostCSS too (instead of using those nested arrays to pass the options to the plugins):

```json:postcss.config.json
{
  "plugins": {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      "autoprefixer": {
        "flexbox": "no-2009",
        "grid": "autoplace"
      },
      "stage": 3,
      "features": {
        "nesting-rules": true,
        "custom-properties": false
      }
    }
  }
}
```

> info: This is a really simple and short post, but I hope it helps someone else who is having the same issue.
