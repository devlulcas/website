import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { parse } from "svelte/compiler";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import grayMatter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import * as dvl from "devlulcas-md";
import z from "zod";


const rawPostSchema = z.object({
  title: z.string({ required_error: 'Title is required.' }),
  excerpt: z.string().max(280, { message: 'Excerpt must be at most 280 characters long.' }),
  date: z.string({ required_error: 'Date is required.' }),
  draft: z.boolean().default(true),
  cover: z.string().default('https://www.lucasrego.tech/og.png'),
  tags: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
});

async function parseMarkup(markup) {
  const { data, content } = grayMatter(markup)

  const metadataResult = rawPostSchema.safeParse(data)

  if (!metadataResult.success) {
    throw new Error(
      `Invalid frontmatter: ${metadataResult.error.errors.map((e) => e.message).join(', ')}`
    );
  }

  try {
    const blockquoteTypes = [
      { prefix: 'tip', className: 'tip' },
      { prefix: 'warning', className: 'warning' },
      { prefix: 'danger', className: 'danger'},
      { prefix: 'info', className: 'info' },
      { prefix: 'success', className: 'success' },
      { prefix: 'note', className: 'note' },
      { prefix: 'question', className: 'question' },
    ]

    const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(dvl.remarkCustomBlockquotes, [{ types: blockquoteTypes }])
    .use(dvl.remarkExternalUrl)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })

    const html = await processor.process(content)

    return {
      data: metadataResult.data,
      content: String(html)
    }
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to parse markdown: ${error.message}`) 
  }
}

async function html(content) {
  const svelteAST = parse(content)
  const {start, end} = svelteAST.html
  const htmlString = content.slice(start, end)
  const parsedMarkup = await parseMarkup(htmlString)
  const stitched = `${content.slice(0, start)}${parsedMarkup.content}${content.slice(end)}`
  return { code: stitched, data: parsedMarkup.data }
}

function me() {
  return {
    name: "me",
    async markup({ content, filename }) {
      if (filename.endsWith(".md")) {
        const html = await html(content);

        return {
          code: html.code,
          data: html.data,
        };
      }
    }
  };
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [me(), vitePreprocess()],
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["*"],
    },
    alias: {
      "$/*": "src/*",
    },
  },
};

export default config;
