import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/lib/reading-time.ts";
import vercel from "@astrojs/vercel/serverless";
import astroI18next from "astro-i18next";

export default defineConfig({
  output: "server",
  site: "https://victor-avila.com",
  markdown: {
    drafts: true,
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  integrations: [mdx(), sitemap(), tailwind(), image(), astroI18next()],
  adapter: vercel(),
});
