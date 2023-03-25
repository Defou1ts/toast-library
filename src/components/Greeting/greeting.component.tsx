import React from 'react';

import { SuccessIcon } from '@assets';
import { colors } from '@theme';

export const Greeting = (): JSX.Element => {
	return (
		<h1>
			{colors.black}
			Hello world <SuccessIcon />
		</h1>
	);
};
