import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { remarkReadingTime } from './src/lib/reading-time.ts';

export default defineConfig({
  output: "server",
  site: "https://victor-avila.com",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "vitesse-dark",
    },
  },
  integrations: [mdx(), sitemap(), tailwind(), image(), react()],
});
