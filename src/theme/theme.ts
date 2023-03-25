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
export const width = [32, 64, 668] as const;
export const height = [32, 64, 181] as const;
export const padding = [27, 29, 32] as const;
export const fontSize = [32] as const;

export const shadow = [`4px 4px 8px ${colors.lightGray}`] as const;

export const theme: Theme = {
	colors,
	borderRadius,
	width,
	height,
	padding,
	fontSize,
	shadow,
};
