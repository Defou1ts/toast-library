import React from 'react';

import { storiesOf } from '@storybook/react';

import { ToastContainer } from '@components';
import { ToastService } from '@utils';
import { TOAST_TYPE } from '@constants';

const stories = storiesOf('Toast library', module);

stories.add('Toast container', (): JSX.Element => {
	const toastService = ToastService.getInstance();

	const notifyInfo = (): void => {
		toastService.addNotification({
			type: TOAST_TYPE.ERROR,
			message: 'Create new gooondes! UIUIUIUi',
		});
	};

	const notifySuccess = (): void => {
		toastService.addNotification({
			type: TOAST_TYPE.SUCCESS,
			duration: 50000,
			message: 'Create new gooondes! UIUIUIUi',
		});
	};

	return (
		<>
			<ToastContainer position="top-right" duration={1000} />
			<button onClick={notifyInfo}>add Info toast</button> <br />
			<button onClick={notifySuccess}>add Success toast</button> <br />
			<button onClick={notifySuccess}>add Success toast</button> <br />
			<button onClick={notifySuccess}>add Success toast</button> <br />
			<button onClick={notifySuccess}>add Success toast</button> <br />
		</>
	);
});
