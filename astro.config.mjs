import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node'; // Import the server adapter
import auth from 'auth-astro'; // Import auth-astro for authentication
import liveCode from 'astro-live-code';
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // Ensure server output for auth handling
  adapter: node({
    mode: 'standalone' // Set the mode for the node adapter
  }),
  integrations: [starlight({
    title: 'TheRefinery Docs',
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Projects',
      autogenerate: {
        directory: 'projects'
      }
    }]
  }), liveCode(),
  // Add the live-code integration
  auth() // Add the auth-astro integration
  , svelte(), react()]
});