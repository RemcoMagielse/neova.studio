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
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/RemcoMagielse/neova.studio' },
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
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						// Use Cases - hidden until content is ready
						// {
						// 	label: 'Use Cases',
						// 	items: [
						// 		{ label: 'Bug Fixing Workflow', slug: 'getting-started/use-cases/bug-fixing' },
						// 		{ label: 'Feature Development', slug: 'getting-started/use-cases/feature-development' },
						// 		{ label: 'Code Review Process', slug: 'getting-started/use-cases/code-review' },
						// 	],
						// },
					],
				},
				// How-To Guides - hidden until content is ready
				// {
				// 	label: 'How-To Guides',
				// 	autogenerate: { directory: 'how-to' },
				// },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				// Examples - hidden until content is ready
				// {
				// 	label: 'Examples',
				// 	items: [
				// 		{ label: 'Stage Configurations', slug: 'examples/stage-configurations' },
				// 		{ label: 'Activity Templates', slug: 'examples/activity-templates' },
				// 		{ label: 'Standards', slug: 'examples/standards' },
				// 	],
				// },
			],
		}),
	],
});
