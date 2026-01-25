// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wiggler',
			logo: {
				src: '/src/assets/houston.webp',
				replacesTitle: true
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Monster Hunter Wilds',
					items: [
						{ label: 'Weapon Guides', slug: 'wilds/guide' },
						{ label: 'Weapon Progression', slug: 'wilds/progression' },
						{ label: 'Endgame Sets', slug: 'wilds/endgame' },
						{ label: 'Game Data', slug: 'wilds/data' },
					],
				},
				{
					label: 'Monster Hunter Rise: Sunbreak',
					items: [
						{ label: 'Weapon Guides', slug: 'rise/guide' },
						{ label: 'Weapon Progression', slug: 'rise/progression' },
						{ label: 'Endgame Sets', slug: 'rise/endgame' },
						{ label: 'Game Data', slug: 'rise/data' },
					],
				},
				{
					label: 'Monster Hunter World: Iceborne',
					items: [
						{ label: 'Weapon Guides', slug: 'world/guide' },
						{ label: 'Weapon Progression', slug: 'world/progression' },
						{ label: 'Endgame Sets', slug: 'world/endgame' },
						{ label: 'Game Data', slug: 'world/data' },
					],
				},
			],
		}),
	],
});
