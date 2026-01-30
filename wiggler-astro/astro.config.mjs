// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// Weapon configuration
const weapons = [
	{ slug: 'greatsword', label: 'Greatsword' },
	{ slug: 'longsword', label: 'Longsword' },
	{ slug: 'sword_and_shield', label: 'Sword and Shield' },
	{ slug: 'dual_blades', label: 'Dual Blades' },
	{ slug: 'hammer', label: 'Hammer' },
	{ slug: 'hunting_horn', label: 'Hunting Horn' },
	{ slug: 'lance', label: 'Lance' },
	{ slug: 'gunlance', label: 'Gunlance' },
	{ slug: 'switch_axe', label: 'Switch Axe' },
	{ slug: 'charge_blade', label: 'Charge Blade' },
	{ slug: 'insect_glaive', label: 'Insect Glaive' },
	{ slug: 'light_bowgun', label: 'Light Bowgun' },
	{ slug: 'heavy_bowgun', label: 'Heavy Bowgun' },
	{ slug: 'bow', label: 'Bow' },
];

const sections = [
	{ slug: 'guide', label: 'Guide' },
	{ slug: 'progression', label: 'Progression' },
	{ slug: 'endgame', label: 'Endgame Sets' },
	{ slug: 'data', label: 'Game Data' },
];

// Generate weapon sidebar items for a game
function generateGameSidebar(/** @type {string} */ game) {
	return [
		{
			label: 'Overview',
			link: `/${game}/`,
		},
		...weapons.map(weapon => ({
			label: weapon.label,
			collapsed: true,
			items: sections.map(section => ({
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
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Monster Hunter Wilds',
					items: generateGameSidebar('wilds'),
				},
				{
					label: 'Monster Hunter Rise: Sunbreak',
					items: generateGameSidebar('rise'),
				},
				{
					label: 'Monster Hunter World: Iceborne',
					items: generateGameSidebar('world'),
				},
			],
			editLink: {
				baseUrl: 'https://github.com/skiddonakamura/wiggler/edit/main/wiggler-astro/',
			},
		}),
		mdx(),
	],
});
