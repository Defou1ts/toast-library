import type { colors, borderRadius, width, height, padding, fontSize, shadow } from '../theme';

export interface Theme {
	colors: typeof colors;
	borderRadius: typeof borderRadius;
	width: typeof width;
	height: typeof height;
	padding: typeof padding;
	fontSize: typeof fontSize;
	shadow: typeof shadow;
}
