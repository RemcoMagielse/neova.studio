// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://neova.studio',
	// Old docs URLs, plus /guides/introduction/ which the app's Help › Documentation opens.
	redirects: {
		'/guides/introduction': '/getting-started/introduction/',
		'/reference/mcp-server': '/reference/mcp-tools/',
		'/reference/file-structure': '/reference/neova-folder/',
		'/reference/stages': '/settings/workflow/',
		'/reference/tasks': '/tasks/task-editor/',
		'/reference/standards': '/project/wiki/',
		// Tools › MCP Servers moved into Settings › Agent tools.
		'/tools/mcp-servers': '/settings/agents/#agent-tools',
	},
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
						{ label: 'What is Neova Studio', slug: 'getting-started/introduction' },
						{ label: 'Install', slug: 'getting-started/install' },
						{ label: 'Open a project', slug: 'getting-started/open-a-project' },
						{ label: 'Find your way around', slug: 'getting-started/find-your-way-around' },
						{ label: 'Quick start', slug: 'getting-started/quick-start' },
					],
				},
				{ label: 'Project', items: [{ autogenerate: { directory: 'project' } }] },
				{ label: 'Agents', items: [{ autogenerate: { directory: 'agents' } }] },
				{ label: 'Tasks', items: [{ autogenerate: { directory: 'tasks' } }] },
				{ label: 'Tools', items: [{ autogenerate: { directory: 'tools' } }] },
				{ label: 'Settings', items: [{ autogenerate: { directory: 'settings' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
			],
		}),
	],
});
