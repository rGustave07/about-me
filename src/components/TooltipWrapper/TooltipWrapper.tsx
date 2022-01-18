import React from 'react'

interface ToolTipWrapperProps {
	tooltip: string;
}

const TooltipWrapper: React.FC<ToolTipWrapperProps> = (props): JSX.Element => {
	const {tooltip, children} = props;

	return (
		<div className='flex items-center tooltip relative w-fit'>
			{children}
			<span className='tooltiptext bg-primary text-tertiary text-lg top-[0px] right-[50px] w-max'>
				{tooltip}
			</span>
		</div>
	)
}

export default TooltipWrapper;