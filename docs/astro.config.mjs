// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://neova.studio',
	integrations: [
		starlight({
			title: 'Neova Studio',
			// "On this page" lists h2 only, so long reference pages keep a short map (UX review).
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
			description: 'Think. Build. Beyond. A workspace for you and your team of AI coding agents.',
			logo: {
				light: './src/assets/neova-logo-color.svg',
				dark: './src/assets/neova-logo-dark.svg',
			},
			customCss: [
				'@fontsource/lato/400.css',
				'@fontsource/lato/700.css',
				'@fontsource/lusitana/700.css',
				'@fontsource/courier-prime/400.css',
				'./src/styles/custom.css',
			],
			components: {
				// GitHub link + Download button instead of social icons (Penpot › Website, row 12)
				SocialIcons: './src/components/HeaderLinks.astro',
				ThemeSelect: './src/components/ThemeToggle.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
