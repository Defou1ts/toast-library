import React from 'react';

import { storiesOf } from '@storybook/react';

import { ToastContainer } from '@components';
import { toast } from '@utils';
import { TOAST_TYPE } from '@constants';

const stories = storiesOf('Toast library', module);

stories.add('Toast container', (): JSX.Element => {
	const notifyInfo = (): void => {
		toast({
			toastType: TOAST_TYPE.INFO,
			duration: 500,
			message: 'Create new gooondes! UIUIUIUi',
		});
	};

	const notifySuccess = (): void => {
		toast({
			toastType: TOAST_TYPE.SUCCESS,
			message: 'Create new gooondes! UIUIUIUi',
		});
	};

	const notifyError = (): void => {
		toast({
			toastType: TOAST_TYPE.ERROR,
			message: 'Create new gooondes! UIUIUIUi',
		});
	};

	const notifyWarning = (): void => {
		toast({
			toastType: TOAST_TYPE.WARNING,
			message: 'Create new gooondes! UIUIUIUi',
		});
	};

	return (
		<>
			<ToastContainer position="top-right" animation="fade" duration={8000} />
			<button onClick={notifyInfo}>add Info toast</button> <br />
			<button onClick={notifySuccess}>add Success toast</button> <br />
			<button onClick={notifyError}>add Error toast</button> <br />
			<button onClick={notifyWarning}>add Warning toast</button> <br />
		</>
	);
});
