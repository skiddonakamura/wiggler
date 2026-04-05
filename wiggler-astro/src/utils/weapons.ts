import type { ImageMetadata } from 'astro';
import { weaponConfigs, weaponSlugs } from './siteConfig';

// Import all weapon icons
import bowIcon from '../assets/weapons/bow.webp';
import chargeBladeIcon from '../assets/weapons/charge_blade.webp';
import dualBladesIcon from '../assets/weapons/dual_blades.webp';
import greatswordIcon from '../assets/weapons/greatsword.webp';
import gunlanceIcon from '../assets/weapons/gunlance.webp';
import hammerIcon from '../assets/weapons/hammer.webp';
import heavyBowgunIcon from '../assets/weapons/heavy_bowgun.webp';
import huntingHornIcon from '../assets/weapons/hunting_horn.webp';
import insectGlaiveIcon from '../assets/weapons/insect_glaive.webp';
import lanceIcon from '../assets/weapons/lance.webp';
import lightBowgunIcon from '../assets/weapons/light_bowgun.webp';
import longswordIcon from '../assets/weapons/longsword.webp';
import switchAxeIcon from '../assets/weapons/switch_axe.webp';
import swordAndShieldIcon from '../assets/weapons/sword_and_shield.webp';

export interface WeaponContent {
	url: string;
	frontmatter: {
		title: string;
		description: string;
	};
	Content: any;
	file: string;
}

export interface WeaponData {
	name: string;
	displayName: string;
	icon: ImageMetadata;
	sections: {
		guide: WeaponContent | null;
		progression: WeaponContent | null;
		endgame: WeaponContent | null;
		data: WeaponContent | null;
	};
}

// Weapon slug to icon mapping
export const weaponIcons: Record<string, ImageMetadata> = {
	bow: bowIcon,
	charge_blade: chargeBladeIcon,
	dual_blades: dualBladesIcon,
	greatsword: greatswordIcon,
	gunlance: gunlanceIcon,
	hammer: hammerIcon,
	heavy_bowgun: heavyBowgunIcon,
	hunting_horn: huntingHornIcon,
	insect_glaive: insectGlaiveIcon,
	lance: lanceIcon,
	light_bowgun: lightBowgunIcon,
	longsword: longswordIcon,
	switch_axe: switchAxeIcon,
	sword_and_shield: swordAndShieldIcon,
};

/**
 * Process weapon content from Astro.glob results
 * @param content Array of markdown files from Astro.glob
 * @returns Structured weapon data array
 */
export function processWeaponData(content: WeaponContent[]): WeaponData[] {
	const weaponMap = new Map<string, WeaponData>();

	// Initialize all weapons
	weaponConfigs.forEach(({ slug, label }) => {
		weaponMap.set(slug, {
			name: slug,
			displayName: label,
			icon: weaponIcons[slug],
			sections: {
				guide: null,
				progression: null,
				endgame: null,
				data: null,
			},
		});
	});

	// Populate weapon data from content files
	content.forEach((item) => {
		// Extract weapon name and section from file path
		// Example: /src/content/docs/wilds/weapons/bow/guide.md
		const pathParts = item.file.split('/');
		const weaponName = pathParts[pathParts.length - 2]; // bow
		const sectionFile = pathParts[pathParts.length - 1]; // guide.md
		const sectionName = sectionFile.replace(/\.mdx?$/, '') as keyof WeaponData['sections'];

		const weapon = weaponMap.get(weaponName);
		if (weapon && (sectionName === 'guide' || sectionName === 'progression' || sectionName === 'endgame' || sectionName === 'data')) {
			weapon.sections[sectionName] = item;
		}
	});

	// Return weapons in order
	return weaponSlugs.map((slug) => weaponMap.get(slug)!);
}
