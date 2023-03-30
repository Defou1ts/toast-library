import { Toast } from '@components';
import { TOAST_TYPE } from '@constants';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

const ToastMeta: ComponentMeta<typeof Toast> = {
	title: 'Toast',
	component: Toast,
};

export default ToastMeta;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Info = Template.bind({});

Info.argTypes = {
	position: {
		table: {
			disable: true,
		},
	},
	remove: {
		table: {
			disable: true,
		},
	},
};

Info.args = {
	position: 'top-left',
	config: {
		toastType: TOAST_TYPE.INFO,
		title: 'Info Title',
		message:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
		animation: 'fade',
	},
};

export const Success = Template.bind({});

Success.argTypes = {
	position: {
		table: {
			disable: true,
		},
	},
	remove: {
		table: {
			disable: true,
		},
	},
};

Success.args = {
	position: 'top-left',
	config: {
		toastType: TOAST_TYPE.SUCCESS,
		title: 'Success Title',
		message:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
		animation: 'fade',
	},
};

export const Error = Template.bind({});

Error.argTypes = {
	position: {
		table: {
			disable: true,
		},
	},
	remove: {
		table: {
			disable: true,
		},
	},
};

Error.args = {
	position: 'top-left',
	config: {
		toastType: TOAST_TYPE.ERROR,
		title: 'Error Title',
		message:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
		animation: 'fade',
	},
};

export const Warning = Template.bind({});

Warning.argTypes = {
	position: {
		table: {
			disable: true,
		},
	},
	remove: {
		table: {
			disable: true,
		},
	},
};

Warning.args = {
	position: 'top-left',
	config: {
		toastType: TOAST_TYPE.WARNING,
		title: 'Error Title',
		message:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
		animation: 'fade',
	},
};
