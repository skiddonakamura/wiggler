export const CONTROL_SCHEME_STORAGE_KEY = 'wiggler-control-scheme';
export const CONTROL_SCHEME_EVENT = 'control-scheme-change';

export const controlSchemes = ['switch', 'playstation', 'xbox', 'keyboard'] as const;

export type ControlScheme = (typeof controlSchemes)[number];

export const defaultControlScheme: ControlScheme = 'switch';

export function isControlScheme(value: string): value is ControlScheme {
	return controlSchemes.includes(value as ControlScheme);
}

export function getStoredControlScheme() {
	try {
		const storedValue = localStorage.getItem(CONTROL_SCHEME_STORAGE_KEY);
		return storedValue && isControlScheme(storedValue) ? storedValue : defaultControlScheme;
	} catch {
		return defaultControlScheme;
	}
}

export function storeControlScheme(scheme: ControlScheme) {
	try {
		localStorage.setItem(CONTROL_SCHEME_STORAGE_KEY, scheme);
	} catch {
		// Browsing still works when storage is unavailable or blocked.
	}
}

export function dispatchControlSchemeChange(scheme: ControlScheme) {
	window.dispatchEvent(
		new CustomEvent(CONTROL_SCHEME_EVENT, {
			detail: { scheme },
		}),
	);
}
