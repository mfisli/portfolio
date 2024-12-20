import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://maksfisli.com',
	integrations: [mdx(), sitemap()],
	site: 'https://mfisli.github.io/portfolio'
});
