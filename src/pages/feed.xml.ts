import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = async () => {
  const articles = await getCollection("articles");
  const sortedArticles = articles
    .filter((article) => !article.data.draft)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Samuel Mallo - Articles</title>
    <description>Technical articles, research, and professional insights from Samuel Mallo</description>
    <link>https://samuelmallo.com</link>
    <atom:link href="https://samuelmallo.com/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${sortedArticles
      .map(
        (article) => `
    <item>
      <title>${escapeXml(article.data.title)}</title>
      <description>${escapeXml(article.data.description)}</description>
      <link>https://samuelmallo.com/articles/${article.slug}</link>
      <guid>https://samuelmallo.com/articles/${article.slug}</guid>
      <pubDate>${article.data.publishDate.toUTCString()}</pubDate>
      <category>${escapeXml(article.data.category)}</category>
      <author>Samuel Mallo</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};