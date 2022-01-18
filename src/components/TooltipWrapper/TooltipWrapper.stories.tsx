import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TooltipWrapper from './TooltipWrapper';

export default {
	title: 'Components/TooltipWrapper',
	component: TooltipWrapper,
	argTypes: {
		tooltip: 'string',
	}
} as unknown as ComponentMeta<typeof TooltipWrapper>

const Template: ComponentStory<typeof TooltipWrapper> = (args) => {
	return (
		<div className='flex justify-center'>
			<TooltipWrapper {...args}>
				<span className='w-fit'>Hover Over Me!</span>
			</TooltipWrapper>
		</div>
	)
}

export const Default = Template.bind({});
Default.args = {
	tooltip: 'testing tooltip'
}