import { Toast } from '@components';
import { TOAST_TYPE } from '@constants';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

const ToastMeta: ComponentMeta<typeof Toast> = {
	title: 'Toast',
	component: Toast,
};

export default ToastMeta;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const ToastStory = Template.bind({});

ToastStory.args = {
	type: TOAST_TYPE.SUCCESS,
};
