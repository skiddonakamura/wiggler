// Control scheme mappings for Monster Hunter
// Maps Nintendo Switch controls to their equivalents on other platforms

export interface ControlMapping {
	switch: string;
	playstation: string;
	xbox: string;
	keyboard: string;
}

export const controlsMap: Record<string, ControlMapping> = {
	// Face buttons
	'X': {
		switch: 'X',
		playstation: 'Triangle',
		xbox: 'Y',
		keyboard: 'Left Click',
	},
	'Y': {
		switch: 'Y',
		playstation: 'Square',
		xbox: 'X',
		keyboard: 'E',
	},
	'A': {
		switch: 'A',
		playstation: 'Cross',
		xbox: 'A',
		keyboard: 'Space',
	},
	'B': {
		switch: 'B',
		playstation: 'Circle',
		xbox: 'B',
		keyboard: 'Right Click',
	},

	// Shoulder buttons
	'ZR': {
		switch: 'ZR',
		playstation: 'R2',
		xbox: 'RT',
		keyboard: 'Mouse 3',
	},
	'ZL': {
		switch: 'ZL',
		playstation: 'L2',
		xbox: 'LT',
		keyboard: 'Shift',
	},
	'R': {
		switch: 'R',
		playstation: 'R1',
		xbox: 'RB',
		keyboard: 'Q',
	},
	'L': {
		switch: 'L',
		playstation: 'L1',
		xbox: 'LB',
		keyboard: 'Ctrl',
	},

	// D-Pad
	'D-Pad Up': {
		switch: 'D-Pad Up',
		playstation: 'D-Pad Up',
		xbox: 'D-Pad Up',
		keyboard: 'Up Arrow',
	},
	'D-Pad Down': {
		switch: 'D-Pad Down',
		playstation: 'D-Pad Down',
		xbox: 'D-Pad Down',
		keyboard: 'Down Arrow',
	},
	'D-Pad Left': {
		switch: 'D-Pad Left',
		playstation: 'D-Pad Left',
		xbox: 'D-Pad Left',
		keyboard: 'Left Arrow',
	},
	'D-Pad Right': {
		switch: 'D-Pad Right',
		playstation: 'D-Pad Right',
		xbox: 'D-Pad Right',
		keyboard: 'Right Arrow',
	},

	// Analog sticks
	'Left Stick': {
		switch: 'Left Stick',
		playstation: 'L3',
		xbox: 'LS',
		keyboard: 'WASD',
	},
	'Right Stick': {
		switch: 'Right Stick',
		playstation: 'R3',
		xbox: 'RS',
		keyboard: 'Mouse',
	},
	'L3': {
		switch: 'L3',
		playstation: 'L3',
		xbox: 'LS',
		keyboard: 'C',
	},
	'R3': {
		switch: 'R3',
		playstation: 'R3',
		xbox: 'RS',
		keyboard: 'V',
	},

	// Common combinations
	'X+A': {
		switch: 'X + A',
		playstation: 'Triangle + Cross',
		xbox: 'Y + A',
		keyboard: 'Left Click + Space',
	},
	'Y+B': {
		switch: 'Y + B',
		playstation: 'Square + Circle',
		xbox: 'X + B',
		keyboard: 'E + Right Click',
	},
	'ZL+ZR': {
		switch: 'ZL + ZR',
		playstation: 'L2 + R2',
		xbox: 'LT + RT',
		keyboard: 'Shift + Mouse 3',
	},

	// Special actions
	'Plus': {
		switch: '+',
		playstation: 'Options',
		xbox: 'Menu',
		keyboard: 'Esc',
	},
	'Minus': {
		switch: '-',
		playstation: 'Share',
		xbox: 'View',
		keyboard: 'Tab',
	},
};

/**
 * Get the control mapping for a given switch button
 * @param switchControl - The Nintendo Switch button name
 * @returns The control mapping for all platforms, or undefined if not found
 */
export function getControlMapping(switchControl: string): ControlMapping | undefined {
	return controlsMap[switchControl];
}
