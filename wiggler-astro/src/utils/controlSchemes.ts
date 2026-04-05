export const CONTROL_SCHEME_STORAGE_KEY = 'wiggler-control-scheme';
export const CONTROL_SCHEME_EVENT = 'control-scheme-change';

export const controlSchemes = ['switch', 'playstation', 'xbox', 'keyboard'] as const;

export type ControlScheme = (typeof controlSchemes)[number];

export const defaultControlScheme: ControlScheme = 'switch';

export function isControlScheme(value: string): value is ControlScheme {
	return controlSchemes.includes(value as ControlScheme);
}

export function getStoredControlScheme() {
	const storedValue = localStorage.getItem(CONTROL_SCHEME_STORAGE_KEY);
	return storedValue && isControlScheme(storedValue) ? storedValue : defaultControlScheme;
}

export function dispatchControlSchemeChange(scheme: ControlScheme) {
	window.dispatchEvent(
		new CustomEvent(CONTROL_SCHEME_EVENT, {
			detail: { scheme },
			bubbles: true,
		})
	);
}
