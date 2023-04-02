import type { FunctionComponent } from 'react';

import type { colors } from '@theme';

export interface ToastProperties {
	Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
	backgroundColor: (typeof colors)[keyof typeof colors];
	textColor: (typeof colors)[keyof typeof colors];
}
