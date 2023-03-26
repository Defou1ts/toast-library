import React from 'react';

import { storiesOf } from '@storybook/react';

import { ToastContainer } from '@components';

const stories = storiesOf('Toast library', module);

stories.add('Toast container', (): JSX.Element => {
	return <ToastContainer />;
});
