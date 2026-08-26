import { SITE } from "../config";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  article?: {
    publishDate: Date;
    modifiedDate?: Date;
    author: string;
    section?: string;
  };
}

export function generateSEO(seo: SEOProps) {
  const title = seo.title
    ? seo.title === SITE.title
      ? SITE.title
      : `${seo.title} | ${SITE.title}`
    : SITE.title;
  const description = seo.description || SITE.description;
  const canonical = seo.canonical
    ? new URL(seo.canonical, SITE.siteUrl).href
    : undefined;
  const image = seo.image ? new URL(seo.image, SITE.siteUrl).href : undefined;

  return {
    title,
    description,
    canonical,
    image,
    type: seo.type || "website",
    article: seo.article,
  };
}
