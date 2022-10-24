/**
 * THANKS https://github.com/vkbansal
 *
 * HIS BLOG POST https://github.com/vkbansal/vkbansal.me/blob/main/src/posts/2022/resolving-images-astro-md-2.md
 */

import path from "node:path";
import { camelCase } from "change-case";
import sizeOf from "image-size";

const IMG_REGEX = /<img\s.*?(src=('|")(.*?)(\2)).*?>/g;

const HTML_REGEX = /const\s+html\s+=\s+(".*");/;

function processHTMLContent(
  content: string,
  imgImports: string[],
  htmlPath: string
) {
  const newContent = content.replace(IMG_REGEX, (imgTag, fullSrc, _, src) => {
    if (src.startsWith("http")) return imgTag;

    // If I mistype it again...
    const correctedSrc = src.startsWith(",/") ? src.replace(",/", "./") : src;

    const imagePath = path.basename(correctedSrc);

    const variableName = camelCase(imagePath);

    imgImports.push(`import ${variableName} from "${correctedSrc}";`);

    const measurements = sizeOf(path.join(htmlPath, imagePath));

    const attributes = [
      `src="\${${variableName}}"`,
      `loading="lazy"`,
      `width="${measurements.width}"`,
      `height="${measurements.height}"`,
      `style="aspect-ratio: ${measurements.width} / ${measurements.height}"`,
    ];

    // Create replacement to our common img tag
    return imgTag.replace(fullSrc, attributes.join(" "));
  });

  return newContent;
}

// Yep, It's a vite plugin
export default {
  name: "vite-local-image-resolver",
  enforce: true,
  transform(code: string, id: string) {
    if (id.endsWith("md")) {
      const imgImports: string[] = [];

      // Replace the html variable returned by vite with our modified string
      const result = code.replace(HTML_REGEX, (_, html) => {
        const preprocessedHTML = JSON.parse(html).replace(/(\\|\$|`)/g, "\\$1");

        const folder = id.replace("index.md", "");

        // Caution: The imgImports is not immutable, we need to mutate it inside the processHTMLContent function
        const processedHTML = processHTMLContent(
          preprocessedHTML,
          imgImports,
          folder
        );

        return `const html = \`${processedHTML}\`;`;
      });

      // Put the code back where it should be
      const finalCode = `${imgImports.join("\n")}\n${result}`;

      return {
        code: finalCode,
      };
    }
  },
};
