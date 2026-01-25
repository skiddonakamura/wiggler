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
			pagination: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Monster Hunter Wilds',
					link: '/wilds/',
				},
				{
					label: 'Monster Hunter Rise: Sunbreak',
					link: '/rise/',
				},
				{
					label: 'Monster Hunter World: Iceborne',
					link: '/world/',
				},
			],
		}),
	],
});
