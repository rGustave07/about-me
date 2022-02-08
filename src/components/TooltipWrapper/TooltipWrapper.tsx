import React from 'react'

interface ToolTipWrapperProps {
	tooltip: string;
}

const TooltipWrapper: React.FC<ToolTipWrapperProps> = (props): JSX.Element => {
	const {tooltip, children} = props;

	return (
		<div className='flex items-center tooltip relative w-fit target group'>
			{children}
			<span
				className={`absolute rounded left-2 
				top-[25px] min-w-[max-content] m-auto
				bg-sky-500 px-4 py-2 drop-shadow-md 
				hidden group-hover:flex`}
			>
				{tooltip}
			</span>
		</div>
	)
}

export default TooltipWrapper;