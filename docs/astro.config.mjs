// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://neova.studio',
	integrations: [
		starlight({
			title: 'Neova',
			tagline: 'AI-powered development companion',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/neova-suite/neova' },
			],
			// Force dark mode as default (matches Neova app)
			head: [
				{
					tag: 'script',
					content: `
						(function() {
							const theme = localStorage.getItem('starlight-theme');
							if (!theme) {
								localStorage.setItem('starlight-theme', 'dark');
								document.documentElement.dataset.theme = 'dark';
							}
						})();
					`,
				},
			],
			expressiveCode: {
				themes: ['dracula'],
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Examples',
					items: [
						{
							label: 'Activities',
							autogenerate: { directory: 'examples/activities' },
						},
					],
				},
			],
		}),
	],
});
