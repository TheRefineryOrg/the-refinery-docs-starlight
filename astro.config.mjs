import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'TheRefinery Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), auth()],
  output: 'server',
  adapter: vercel()
});

// export default defineConfig({
// 	integrations: [
// 		starlight({
// 			title: 'TheRefinery Docs',
// 			social: {
// 				github: 'https://github.com/withastro/starlight',
// 			},
// 			sidebar: [
// 				{
// 					label: 'Guides',
// 					autogenerate: { directory: 'guides' },
// 				},
// 				{
// 					label: 'Reference',
// 					autogenerate: { directory: 'reference' },
// 				},
// 				{
// 					label: 'Projects',
// 					autogenerate: { directory: 'projects' },
// 				},
// 			],
// 		}),
// 	],
// });