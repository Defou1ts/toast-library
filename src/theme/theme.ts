import type { Theme } from '../interfaces';

export const colors = {
	white: '#FFFFFF',
	purple: '#9A40D3',
	lightGray: '#00000029',
	gray: '#707070',
	yellow: '#F4E048',
	black: '#000000',
	red: '#E25837',
	green: '#37E29A',
} as const;

export const borderRadius = [24, 50] as const;
export const width = [24, 48, 500, 16, 32, 95, 100] as const;
export const height = [32, 64, 181, 16, 48] as const;
export const padding = [27, 29, 32, 58, 24] as const;
export const fontSize = [20, 28, 12] as const;
export const gaps = [30, 10, 20] as const;
export const margins = [15] as const;

export const shadow = [`4px 4px 8px ${colors.lightGray}`] as const;

export const breakpoints = {
	sm: 800,
	xs: 550,
} as const;

export const theme: Theme = {
	colors,
	borderRadius,
	width,
	height,
	padding,
	fontSize,
	shadow,
	gaps,
	margins,
	breakpoints,
};
