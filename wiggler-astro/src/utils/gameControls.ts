import type { ControlMapping } from './controlsMapping';

type GameId = 'wilds';

const BASE_PATH = '/button_icons';

type ActionControls = Record<string, ControlMapping>;
type GameControls = Record<GameId, ActionControls>;

// Wilds defaults are based on the published default control tables referenced here:
// https://www.capcom-support.com/hc/en-us/articles/20394941803292-Monster-Hunter-Wilds-Online-Manual
// https://game8.co/games/Monster-Hunter-Wilds/archives/499810
const gameControls: GameControls = {
	wilds: {
		attack_primary: {
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
		attack_secondary: {
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
		attack_primary_secondary: {
			switch: 'X + B',
			playstation: 'Triangle + Circle',
			xbox: 'Y + B',
			keyboard: 'Left Click + Right Click',
		},
		special_attack: {
			switch: 'ZR',
			playstation: 'R2',
			xbox: 'RT',
			keyboard: 'R',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zr_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_rt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_r_outline.svg`,
			},
		},
		evade: {
			switch: 'A',
			playstation: 'Cross',
			xbox: 'A',
			keyboard: 'Space',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_a_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_cross_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_a_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_space_icon_outline.svg`,
			},
		},
		sheathe: {
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
		focus_mode: {
			switch: 'ZL',
			playstation: 'L2',
			xbox: 'LT',
			keyboard: 'Alt',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zl_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_l2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_lt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_alt_outline.svg`,
			},
		},
		focus_strike: {
			switch: 'R',
			playstation: 'R1',
			xbox: 'RB',
			keyboard: 'Shift',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_r_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r1_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_rb_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_shift_outline.svg`,
			},
		},
		slinger_shot: {
			switch: 'L3',
			playstation: 'L3',
			xbox: 'LS',
			keyboard: 'Mouse Click',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_l_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_l3_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_ls_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_scroll_outline.svg`,
			},
		},
		bow_charge_shoot: {
			switch: 'ZR (Hold)',
			playstation: 'R2 (Hold)',
			xbox: 'RT (Hold)',
			keyboard: 'Left Click (Hold)',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zr_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_rt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_left_outline.svg`,
			},
		},
		bow_quick_shot: {
			switch: 'A',
			playstation: 'Circle',
			xbox: 'B',
			keyboard: 'F',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_a_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_circle_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_b_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_f_outline.svg`,
			},
		},
		bow_dragon_piercer: {
			switch: 'Y + A',
			playstation: 'Triangle + Circle',
			xbox: 'Y + B',
			keyboard: 'R + F',
		},
		bow_apply_coating: {
			switch: 'X',
			playstation: 'Triangle',
			xbox: 'Y',
			keyboard: 'R',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_x_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_triangle_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_y_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_r_outline.svg`,
			},
		},
		bow_select_coating: {
			switch: 'L + X / A',
			playstation: 'L1 + Triangle / Cross',
			xbox: 'LB + Y / A',
			keyboard: 'Ctrl + Up / Down',
		},
		bow_ready_tracer: {
			switch: 'ZR + Y',
			playstation: 'R2 + Square',
			xbox: 'RT + X',
			keyboard: 'Left Click + E',
		},
		bow_focus_fire: {
			switch: 'ZL + R',
			playstation: 'L2 + R1',
			xbox: 'LT + RB',
			keyboard: 'Right Click + Shift',
		},
		light_bowgun_fire: {
			switch: 'ZR',
			playstation: 'R2',
			xbox: 'RT',
			keyboard: 'Left Click',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zr_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_rt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_left_outline.svg`,
			},
		},
		light_bowgun_aim_focus: {
			switch: 'ZL (Hold)',
			playstation: 'L2 (Hold)',
			xbox: 'LT (Hold)',
			keyboard: 'Right Click (Hold)',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zl_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_l2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_lt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_right_outline.svg`,
			},
		},
		light_bowgun_focus_blast: {
			switch: 'ZL + R',
			playstation: 'L2 + R1',
			xbox: 'LT + RB',
			keyboard: 'Right Click + Shift',
		},
		light_bowgun_reload: {
			switch: 'X',
			playstation: 'Triangle',
			xbox: 'Y',
			keyboard: 'R',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_x_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_triangle_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_y_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_r_outline.svg`,
			},
		},
		light_bowgun_energy_mode: {
			switch: 'A',
			playstation: 'Circle',
			xbox: 'B',
			keyboard: 'F',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_a_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_circle_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_b_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_f_outline.svg`,
			},
		},
		light_bowgun_special_ammo: {
			switch: 'X + A',
			playstation: 'Triangle + Circle',
			xbox: 'Y + B',
			keyboard: 'R + F',
		},
		light_bowgun_select_ammo: {
			switch: 'L + X / A',
			playstation: 'L1 + Triangle / Cross',
			xbox: 'LB + Y / A',
			keyboard: 'Ctrl + Up / Down',
		},
		heavy_bowgun_fire: {
			switch: 'ZR',
			playstation: 'R2',
			xbox: 'RT',
			keyboard: 'Left Click',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zr_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_r2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_rt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_left_outline.svg`,
			},
		},
		heavy_bowgun_aim_focus: {
			switch: 'ZL (Hold)',
			playstation: 'L2 (Hold)',
			xbox: 'LT (Hold)',
			keyboard: 'Right Click (Hold)',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_zl_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_trigger_l2_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_lt_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/mouse_right_outline.svg`,
			},
		},
		heavy_bowgun_focus_blast: {
			switch: 'ZL + R',
			playstation: 'L2 + R1',
			xbox: 'LT + RB',
			keyboard: 'Right Click + Shift',
		},
		heavy_bowgun_reload: {
			switch: 'X',
			playstation: 'Triangle',
			xbox: 'Y',
			keyboard: 'R',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_x_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_triangle_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_y_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_r_outline.svg`,
			},
		},
		heavy_bowgun_ignition_mode: {
			switch: 'A',
			playstation: 'Circle',
			xbox: 'B',
			keyboard: 'F',
			icons: {
				switch: `${BASE_PATH}/switch/outline/switch_button_a_outline.svg`,
				playstation: `${BASE_PATH}/playstation/outline/playstation_button_circle_outline.svg`,
				xbox: `${BASE_PATH}/xbox/outline/xbox_button_b_outline.svg`,
				keyboard: `${BASE_PATH}/mouse_keyboard/outline/keyboard_f_outline.svg`,
			},
		},
		heavy_bowgun_guard: {
			switch: 'X + A',
			playstation: 'Triangle + Circle',
			xbox: 'Y + B',
			keyboard: 'R + F',
		},
		heavy_bowgun_select_ammo: {
			switch: 'L + X / A',
			playstation: 'L1 + Triangle / Cross',
			xbox: 'LB + Y / A',
			keyboard: 'Ctrl + Up / Down',
		},
	},
};

export function getGameControlMapping(game: string, action: string): ControlMapping | undefined {
	if (game !== 'wilds') {
		return undefined;
	}

	return gameControls[game][action];
}
