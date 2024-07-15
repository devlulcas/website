import type { RawPostSchema } from "../schemas/raw-post-schema";

export type PostMetadata = Required<
  RawPostSchema & {
    slug: string;
    language: Language;
    readingTime: number;
  }
>;

export type Language =
  | { niceName: "Português"; code: "pt-br" }
  | { niceName: "English"; code: "en" };
