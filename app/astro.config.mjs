import { defineConfig } from "astro/config";
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tommy-holmes.github.io',
  base: '/athena-site',
  integrations: [
    tailwind(),
    sanity({
      projectId: 'kkdxagg1',
      dataset: 'production',
      apiVersion: '2023-05-01',
      useCdn: true,
    }),
  ]
});