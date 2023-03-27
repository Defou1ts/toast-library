import React from 'react';

import { storiesOf } from '@storybook/react';

import { ToastContainer } from '@components';
import { ToastService } from '@utils';
import { TOAST_TYPE } from '@constants';

const stories = storiesOf('Toast library', module);

stories.add('Toast container', (): JSX.Element => {
	const notifyInfo = (): void => {
		ToastService.getInstance().addNotification({
			type: TOAST_TYPE.INFO,
		});
	};

	const notifySuccess = (): void => {
		ToastService.getInstance().addNotification({
			type: TOAST_TYPE.SUCCESS,
		});
	};

	return (
		<>
			<ToastContainer />
			<button onClick={notifyInfo}>add Info toast</button>
			<button onClick={notifySuccess}>add Success toast</button>
		</>
	);
});
