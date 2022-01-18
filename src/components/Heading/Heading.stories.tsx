import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	argTypes: {
		name: 'string',
		position: 'string',
	},
} as unknown as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({}); 
Default.args = {
	name: 'Ritter Stephen Gustave',
	position: 'Full-Stack Engineer'
};