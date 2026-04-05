// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import { gameConfigs, sectionConfigs, weaponConfigs } from './src/utils/siteConfig.ts';

// Generate weapon sidebar items for a game
function generateGameSidebar(/** @type {string} */ game) {
	return [
		{
			label: 'Overview',
			link: `/${game}/`,
		},
		...weaponConfigs.map(weapon => ({
			label: weapon.label,
			collapsed: true,
			items: sectionConfigs.map(section => ({
				label: section.label,
				link: `/${game}/weapons/${weapon.slug}/${section.slug}/`,
			})),
		})),
	];
}

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
			},
		},
	},
	integrations: [
		starlight({
			title: 'Wiggler',
			logo: {
				src: '/src/assets/houston.webp',
				replacesTitle: true
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			pagination: false,
			components: {
				Pagination: './src/components/CustomPagination.astro',
				Sidebar: './src/components/CustomSidebar.astro',
			},
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				...gameConfigs.map((game) => ({
					label: game.label,
					items: generateGameSidebar(game.slug),
				})),
			],
			editLink: {
				baseUrl: 'https://github.com/skiddonakamura/wiggler/edit/main/wiggler-astro/',
			},
		}),
		mdx(),
	],
});
