import { ComponentStory, ComponentMeta } from '@storybook/react';

import Technologies from '.';

const Template: ComponentStory<typeof Technologies> = (args) => <Technologies {...args} />

export const Default = Template.bind({});
Default.args = {};

export default {
	title: 'Sections/Technologies',
	component: Technologies,
	argTypes: {},
} as unknown as ComponentMeta<typeof Technologies>