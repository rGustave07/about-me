import React from 'react';
import ReactLogo from '../../assets/techIcons/ReactIcon/ReactIcon';
import ReduxLogo from '../../assets/techIcons/ReduxIcon/ReduxIcon';
import RustLogo from '../../assets/techIcons/RustLangIcon/RustIcon';
import WebpackLogo from '../../assets/techIcons/WebpackIcon/WebpackIcon';
import NodeLogo from '../../assets/techIcons/NodeIcon/NodeIcon';
import Golang from '../../assets/techIcons/GolangIcon/GolangIcon';
import ViteIcon from '../../assets/techIcons/ViteIcon/ViteIcon';
import MongodbIcon from '../../assets/techIcons/MongodbIcon/Mongodb';
import SqlIcon from '../../assets/techIcons/SqlIcon/SqlIcon';

import LogoCloud from '../../components/LogoCloud';

interface TechnologiesProp { };

const Technologies = (props: TechnologiesProp): JSX.Element => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    Hey... I've used these before!
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <LogoCloud accompanyingText='React' textColor='text-reactLogoBlue'>
                        <ReactLogo className='text-reactLogoBlue' height='30px' width='30px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='Redux' textColor='text-reduxLogoPurple'>
                        <ReduxLogo className='text-reduxLogoPurple' height='30px' width='30px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='Rust'>
                        <RustLogo height='30px' width='30px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='Webpack'>
                        <WebpackLogo height='45px' width='30px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='NodeJS' textColor='#8cc84b'>
                        <NodeLogo height='40px' width='30px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='Golang'>
                        <Golang height='45px' width='45px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='ViteJS'>
                        <ViteIcon height='35px' width='35px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='MongoDB'>
                        <MongodbIcon height='35px' width='35px' />
                    </LogoCloud>
                    <LogoCloud accompanyingText='SQL'>
                        <SqlIcon height='35px' width='35px'/>
                    </LogoCloud>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
