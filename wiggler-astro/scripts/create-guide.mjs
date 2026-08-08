import { access, cp } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const [game, weapon] = process.argv.slice(2);
const supportedGames = new Set(['wilds', 'rise', 'world']);
const isSlug = value => /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(value ?? '');

if (!supportedGames.has(game) || !isSlug(weapon)) {
	console.error('Usage: npm run new-guide -- <wilds|rise|world> <weapon-slug>');
	process.exit(1);
}

const projectRoot = process.cwd();
const template = path.join(projectRoot, 'guide-template');
const destination = path.join(projectRoot, 'src', 'content', 'docs', game, 'weapons', weapon);

try {
	await access(destination, constants.F_OK);
	console.error(`Refusing to overwrite existing guide: ${path.relative(projectRoot, destination)}`);
	process.exit(1);
} catch {
	await cp(template, destination, {
		recursive: true,
		filter: source => !source.endsWith(`${path.sep}README.md`),
	});
	console.log(`Created ${path.relative(projectRoot, destination)}`);
	console.log('Next: replace the TODO values, then run npm run dev.');
}
