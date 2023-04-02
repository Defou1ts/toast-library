import { toast } from '@utils';
import { TOAST_TYPE } from '@constants';

import { ToastContainer } from './toastcontainer.component';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

const ToastContainerMeta: ComponentMeta<typeof ToastContainer> = {
	title: 'Toast Container',
	component: ToastContainer,
};
export default ToastContainerMeta;

export const ToastContainerStory: ComponentStory<typeof ToastContainer> = (args) => {
	const { title, message, toastType, animation, duration, backgroundColor, textColor } = args;

	const handleToast = (): void => {
		toast({
			title,
			message,
			toastType,
			animation,
			duration,
			backgroundColor,
			textColor,
		});
	};

	return (
		<>
			<button data-test-id="toast-button" onClick={handleToast}>
				Toast
			</button>
			<ToastContainer {...args} />
		</>
	);
};

ToastContainerStory.args = {
	position: 'bottom-left',
	toastType: TOAST_TYPE.INFO,
	title: 'Example title',
	message: 'Example message',
	duration: 5000,
	animation: 'slide',
	margins: 0,
};

ToastContainerStory.argTypes = {
	duration: { type: 'number' },
	message: { type: 'string' },
	title: { type: 'string' },
	toastType: {
		name: 'type',
		options: [TOAST_TYPE.INFO, TOAST_TYPE.SUCCESS, TOAST_TYPE.ERROR, TOAST_TYPE.WARNING],
		control: 'select',
	},
	animation: {
		options: ['fade', 'slide'],
		control: 'select',
	},
	backgroundColor: {
		name: 'Background color',
		options: ['red', 'green', 'blue', 'yellow', 'purple', 'black'],
		controle: 'select',
	},
	textColor: {
		name: 'Text color',
		options: ['black', 'white', 'yellow', 'green'],
		control: 'radio',
	},
};
