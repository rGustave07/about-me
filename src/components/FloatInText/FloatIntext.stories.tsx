import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FloatInText from '.';

const Template: ComponentStory<typeof FloatInText> = (args) => {
	return (
		<FloatInText {...args} />
	)
};

export const Default = Template.bind({});
Default.args = {
	texts: ['Test1', 'Test2', 'Test3'],
	endingText: 'Test2',
	className: ''
}

export default {
	title: 'Components/FloatInText',
	component: FloatInText,
	argTypes: {}
} as unknown as ComponentMeta<typeof FloatInText>
