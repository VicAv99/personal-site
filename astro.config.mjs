import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import astroI18next from 'astro-i18next';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { remarkReadingTime } from './src/lib/reading-time.ts';

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
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image(),
    astroI18next(),
    react(),
  ],
  adapter: vercel(),
});
