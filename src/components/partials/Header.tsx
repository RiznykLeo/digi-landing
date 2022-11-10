import React from 'react';

interface HeaderProps {
    header: string
    prompt: string
}

function Header(props: HeaderProps) {
    return (
        <div className='pt-16 pb-24 px-8 lg:px-40'>
            <div className='flex items-center gap-6 mb-4'>
                <div className='w-[100px] h-[1px] bg-cyan-300 mt-2'/>
                <h2 className='text-4xl font-bold align-middle text-white'>
                    {props.header}
                </h2>
            </div>
            <p className="text-cyan-300 uppercase">
                {props.prompt}
            </p>
        </div>
    );
}

export default Header;
