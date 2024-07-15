import { website } from "$/lib/assets/config";
import type { RequestHandler } from "./$types";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import inter from "$lib/assets/fonts/inter-bold.ttf";
import { read } from "$app/server";
import SvelteOG from "./og.svelte";
import { html as toReactNode } from "satori-html";

const fontData = read(inter).arrayBuffer();

const height = 630;
const width = 1200;

export const GET: RequestHandler = async ({ url }) => {
  const searchParams = url.searchParams;

  const text = searchParams.get("text") || website.title;
  const thumb = searchParams.get("thumb") || null;
  const tags = searchParams.getAll("tag") ?? [];
  const isMain = searchParams.get("main") === "true";

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const result = SvelteOG.render({
    text,
    thumb,
    tags,
    isMain,
  });

  const element = toReactNode(
    `${result.html}<style>${result.css.code}</style>`,
  );

  const svg = await satori(element, {
    fonts: [
      {
        name: "Inter",
        data: await fontData,
        style: "normal",
      },
    ],
    height,
    width,
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: width,
    },
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=86400",
    },
  });
};
