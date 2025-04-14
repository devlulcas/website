import { website } from "$/lib/assets/config/website";
import type { OgImageProps } from "$/routes/api/og/og.svelte";
import type { RawPostSchema } from "../server/posts/schemas/raw-post-schema";
import type { Language } from "../server/posts/types";

export function extractOgParams(searchParams: URLSearchParams): OgImageProps {
  const publishedOn = searchParams.get('p_date') || new Date().toISOString();
  const language = searchParams.get('language') || 'en';
  const text = searchParams.get('text') || website.title;
  const thumb = searchParams.get('thumb') || website.image;
  const tags = searchParams.getAll('tag') ?? [];

  return {
    publishedOn,
    language,
    text,
    thumb,
    tags,
  }
}

export function generateOgURL(post: RawPostSchema, language: Language, thumb: string | undefined): string {
  thumb ||= '/images/og-image.webp';
  thumb = new URL(thumb, website.url).toString();

  const postDate = new Date(post.date).toISOString();

  const ogTitle = post.ogTitle ?? post.title
  const cover = new URL('/api/og', website.url);
  cover.searchParams.append('p_date', postDate);
  cover.searchParams.append('language', language.code);
  cover.searchParams.append('text', ogTitle);
  cover.searchParams.append('thumb', thumb);
  post.tags.forEach((tag) => cover.searchParams.append('tag', tag));
  return cover.toString();
};
