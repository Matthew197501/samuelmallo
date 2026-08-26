import type { APIRoute } from "astro";
import { SITE } from "../config";

const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", SITE.siteUrl).href}`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
