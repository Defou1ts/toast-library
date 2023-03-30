import type {
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
} from '@theme';

export interface Theme {
	colors: typeof colors;
	borderRadius: typeof borderRadius;
	width: typeof width;
	height: typeof height;
	padding: typeof padding;
	fontSize: typeof fontSize;
	shadow: typeof shadow;
	gaps: typeof gaps;
	margins: typeof margins;
	breakpoints: typeof breakpoints;
}
