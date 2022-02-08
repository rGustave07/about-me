import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogoCloud from '.';
import ReactLogo from '../../assets/techIcons/ReactIcon/ReactIcon';

const Template: ComponentStory<typeof LogoCloud> = (args) => {
	return (
		<div className='flex center w-[300px]'>
			<LogoCloud {...args}>
				<ReactLogo className='text-reactLogoBlue' height='30px' width='30px'/>
			</LogoCloud>
		</div>
	)
}

const GrayTemplate: ComponentStory<typeof LogoCloud> = (args) => {
	return (
		<div className='flex center w-[300px]'>
			<LogoCloud {...args}>
				<ReactLogo className='text-gray-400' height='30px' width='30px'/>
			</LogoCloud>
		</div>
	)
}

export const Default = Template.bind({});
Default.args = {
	accompanyingText: 'React',
	textColor: 'text-reactLogoBlue'
};

export const GrayedOut = GrayTemplate.bind({});
GrayedOut.args = {
	accompanyingText: 'React',
	textColor: 'text-gray-400'
}

export default {
	title: 'Components/LogoCloud',
	component: LogoCloud,
	argTypes: {
		accompanyingText: 'string',
		textColor: 'string',
	},
} as unknown as ComponentMeta<typeof LogoCloud>