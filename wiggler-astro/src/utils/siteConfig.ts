export const gameConfigs = [
	{ slug: 'wilds', label: 'Monster Hunter Wilds' },
	{ slug: 'rise', label: 'Monster Hunter Rise: Sunbreak' },
	{ slug: 'world', label: 'Monster Hunter World: Iceborne' },
] as const;

export const weaponConfigs = [
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
] as const;

export const sectionConfigs = [
	{ slug: 'guide', label: 'Guide' },
	{ slug: 'progression', label: 'Progression' },
	{ slug: 'endgame', label: 'Endgame Sets' },
	{ slug: 'data', label: 'Game Data' },
] as const;

export const paginationSectionConfigs = sectionConfigs.filter(
	(section) => section.slug !== 'data'
);

export type GameSlug = (typeof gameConfigs)[number]['slug'];
export type WeaponSlug = (typeof weaponConfigs)[number]['slug'];
export type SectionSlug = (typeof sectionConfigs)[number]['slug'];

export const weaponSlugs = weaponConfigs.map((weapon) => weapon.slug);

export const weaponDisplayNames = Object.fromEntries(
	weaponConfigs.map((weapon) => [weapon.slug, weapon.label])
) as Record<WeaponSlug, string>;

export const gameOverviewHrefs = Object.fromEntries(
	gameConfigs.map((game) => [game.slug, `/${game.slug}/`])
) as Record<GameSlug, string>;

const validGameSlugs = new Set(gameConfigs.map((game) => game.slug));
const validWeaponSlugs = new Set(weaponConfigs.map((weapon) => weapon.slug));
const validSectionSlugs = new Set(sectionConfigs.map((section) => section.slug));

export function normalizePathname(pathname: string) {
	return pathname.replace(/\/$/, '') || '/';
}

export function parseGameOverviewPath(pathname: string): GameSlug | null {
	const normalizedPath = normalizePathname(pathname);
	const match = normalizedPath.match(/^\/(\w+)$/);
	const game = match?.[1];

	if (game && validGameSlugs.has(game as GameSlug)) {
		return game as GameSlug;
	}

	return null;
}

export function parseWeaponPagePath(pathname: string) {
	const normalizedPath = normalizePathname(pathname);
	const match = normalizedPath.match(/^\/(\w+)\/weapons\/([\w_]+)\/(guide|progression|endgame|data)$/);

	if (!match) {
		return null;
	}

	const [, game, weapon, section] = match;

	if (
		!validGameSlugs.has(game as GameSlug) ||
		!validWeaponSlugs.has(weapon as WeaponSlug) ||
		!validSectionSlugs.has(section as SectionSlug)
	) {
		return null;
	}

	return {
		game: game as GameSlug,
		weapon: weapon as WeaponSlug,
		section: section as SectionSlug,
	};
}
