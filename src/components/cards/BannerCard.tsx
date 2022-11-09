import React, {ReactNode} from 'react';

interface BannerCardProps {
    header: string
    icon: ReactNode
}

function BannerCard(props: BannerCardProps) {
    return (
        <div className='bannercard p-8
        text-white bg-zinc-900 border-2 border-zinc-900'>
            <div className='icon text-5xl text-cyan-300 mb-4 flex'>
                {props.icon}
            </div>
            <h3 className='text-3xl font-bold'>
                {props.header}
            </h3>
            <div className='divider h-0.5 bg-cyan-300 w-0 my-4'>
            </div>
            <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ipsa minima officiis quae reiciendis rem sapiente totam.
                Accusamus necessitatibus ullam vero?
            </p>
        </div>
    );
}

export default BannerCard;
