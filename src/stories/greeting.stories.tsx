import React from 'react';

import { storiesOf } from '@storybook/react';

import { ToastContainer } from '@components';

const stories = storiesOf('App test', module);

stories.add('App', (): JSX.Element => {
	return <ToastContainer />;
});
