import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainHero from './MainHero';

const Template: ComponentStory<typeof MainHero> = (args) => <MainHero {...args} />

export const Default = Template.bind({});
Default.args = {};

export default {
	title: 'Sections/MainHero',
	component: MainHero,
	argTypes: {}
} as unknown as ComponentMeta<typeof MainHero>
