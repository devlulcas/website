export type FeaturedProject = {
  name: string;
  description: {
    en: string;
    pt: string;
  };
  details: {
    en: string;
    pt: string;
  };
  url: string;
  code: string | null;
  tags: {
    both: string[];
    en: string[];
    pt: string[];
  };
  images: string[];
};

export type Project = {
  name: string;
  description: string;
  code: string;
  url?: string;
  createdAt: string;
  languages?: { name: string }[];
  image: string;
};
