// Control scheme mappings for Monster Hunter
// Maps Nintendo Switch controls to their equivalents on other platforms
// Includes both control names and icon file paths

export interface ControlMapping {
	switch: string;
	playstation: string;
	xbox: string;
	keyboard: string;
	icons?: {
		switch: string;
		playstation: string;
		xbox: string;
		keyboard: string;
	};
}

// Base path for button icons (served from public folder)
const BASE_PATH = '/button_icons';

export const controlsMap: Record<string, ControlMapping> = {
	// Face buttons
	'X': {
		switch: 'X',
		playstation: 'Triangle',
		xbox: 'Y',
		keyboard: 'Left Click',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_x_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_button_triangle_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_button_y_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_left_outline.svg`,
		},
	},
	'Y': {
		switch: 'Y',
		playstation: 'Square',
		xbox: 'X',
		keyboard: 'E',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_y_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_button_square_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_button_x_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_e_outline.svg`,
		},
	},
	'A': {
		switch: 'A',
		playstation: 'Cross',
		xbox: 'A',
		keyboard: 'Space',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_a_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_button_cross_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_button_a_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_space_outline.svg`,
		},
	},
	'B': {
		switch: 'B',
		playstation: 'Circle',
		xbox: 'B',
		keyboard: 'Right Click',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_b_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_button_circle_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_button_b_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_right_outline.svg`,
		},
	},

	// Shoulder buttons
	'ZR': {
		switch: 'ZR',
		playstation: 'R2',
		xbox: 'RT',
		keyboard: 'Mouse 3',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_zr_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r2_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_rt_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_scroll_outline.svg`,
		},
	},
	'ZL': {
		switch: 'ZL',
		playstation: 'L2',
		xbox: 'LT',
		keyboard: 'Shift',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_zl_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_l2_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_lt_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_shift_outline.svg`,
		},
	},
	'R': {
		switch: 'R',
		playstation: 'R1',
		xbox: 'RB',
		keyboard: 'Q',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_r_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r1_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_rb_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_q_outline.svg`,
		},
	},
	'L': {
		switch: 'L',
		playstation: 'L1',
		xbox: 'LB',
		keyboard: 'Ctrl',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_l_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_l1_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_lb_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_ctrl_outline.svg`,
		},
	},

	// D-Pad
	'D-Pad Up': {
		switch: 'D-Pad Up',
		playstation: 'D-Pad Up',
		xbox: 'D-Pad Up',
		keyboard: 'Up Arrow',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_dpad_up_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_dpad_up_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_dpad_up_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_arrow_up_outline.svg`,
		},
	},
	'D-Pad Down': {
		switch: 'D-Pad Down',
		playstation: 'D-Pad Down',
		xbox: 'D-Pad Down',
		keyboard: 'Down Arrow',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_dpad_down_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_dpad_down_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_dpad_down_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_arrow_down_outline.svg`,
		},
	},
	'D-Pad Left': {
		switch: 'D-Pad Left',
		playstation: 'D-Pad Left',
		xbox: 'D-Pad Left',
		keyboard: 'Left Arrow',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_dpad_left_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_dpad_left_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_dpad_left_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_arrow_left_outline.svg`,
		},
	},
	'D-Pad Right': {
		switch: 'D-Pad Right',
		playstation: 'D-Pad Right',
		xbox: 'D-Pad Right',
		keyboard: 'Right Arrow',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_dpad_right_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_dpad_right_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_dpad_right_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_arrow_right_outline.svg`,
		},
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
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_l_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_button_l3_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_ls_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_c_outline.svg`,
		},
	},
	'R3': {
		switch: 'R3',
		playstation: 'R3',
		xbox: 'RS',
		keyboard: 'V',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_r_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation_button_r3_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_rs_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_v_outline.svg`,
		},
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
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_plus_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation4_button_options_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_button_menu_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_escape_outline.svg`,
		},
	},
	'Minus': {
		switch: '-',
		playstation: 'Share',
		xbox: 'View',
		keyboard: 'Tab',
		icons: {
			switch: `${BASE_PATH}/switch/outline/switch_button_minus_outline.svg`,
			playstation: `${BASE_PATH}/playstation/outline/playstation4_button_share_outline.svg`,
			xbox: `${BASE_PATH}/xbox/outline/xbox_button_view_outline.svg`,
			keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_tab_outline.svg`,
		},
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
