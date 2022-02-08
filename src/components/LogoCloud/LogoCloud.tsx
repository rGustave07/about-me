import React from 'react';

interface LogoCloudProps {
	accompanyingText: string;
	textColor?: string;
}

const LogoCloud: React.FC<LogoCloudProps> = (props) => {
	const {
		accompanyingText,
		textColor = 'text-gray-400',
		children
	} = props;

	return (
		<div className='col-span-1 flex justify-center py-8 px-8 bg-gray-50 w-full gap-1.5'>
			<span className='max-h-12 flex items-center'>{children}</span>
			<span
				className={`flex flex-col justify-center lg:text-3xl md:text-base ${textColor}`}
				style={{ color: textColor}}
			>{accompanyingText}</span>
		</div> 
	);
};

export default LogoCloud;
