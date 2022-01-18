import React from 'react'
import GithubIcon from '../../assets/githubicon.svg';
import LinkedinIcon from '../../assets/linkedinicon.svg';
import ResumeIcon from '../../assets/resumeicon.svg';

import TooltipWrapper from '../TooltipWrapper';

interface HeadingProps {
	name: string;
	position: string;
}

// Perhaps think about changing these to env variables
const githubLink = "https://github.com/rGustave07";
const linkedInLink = "https://www.linkedin.com/in/rittergustavecodes/";
const resumeLink = "https://drive.google.com/file/d/1cdDOYG3gWQJe-chsrp9FTMiTf9KAbQDT/view?usp=sharing";

const Heading = (props: HeadingProps) => {
	const {name, position} = props;

	return (
		<div
			className='grid grid-cols-2 grid-rows-1 p-1 bg-secondary rounded-br-lg rounded-bl-lg h-[100px]'
		>
			<div className='leading-5 flex flex-col cols-start-1 cols-end-1 ml-5 justify-center'>
				<p className='text-[50px] text-tertiary font-sans text-primary animate-phase'>{name}</p>
				<p className='text-[30px] text-tertiary font-sans animate-pulse'>{position}</p>
			</div>

			<div className='flex flex-row cols-start-2 px-5 justify-end'>
				<TooltipWrapper tooltip='GitHub'>
					<a href={githubLink} target="_blank">
						<img className='mx-[10px]' src={GithubIcon} width={40}/>
					</a>
				</TooltipWrapper>
				<TooltipWrapper tooltip='LinkedIn'>
					<a href={linkedInLink} target="_blank">
						<img className='mx-[10px]' src={LinkedinIcon} width={40}/>
					</a>
				</TooltipWrapper>
				<TooltipWrapper tooltip='My Resume'>
					<a href={resumeLink} target="_blank">
						<img className='mx-[10px]' src={ResumeIcon} width={40}/>
					</a>
				</TooltipWrapper>
			</div>
		</div>
	)
}

export default Heading;
