import React, {ReactNode} from 'react';

interface ServiceCardProps {
    header: string
    icon: ReactNode
}

function ServiceCard(props: ServiceCardProps) {
    return (
        <div className='servicecard'>
            <div className='bg-zinc-900 p-8 flex gap-4 flex-col'>
                <div className='text-3xl text-cyan-300'>
                    {props.icon}
                </div>
                <h2 className='text-2xl font-bold'>
                    {props.header}
                </h2>
                <p className=''>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Aspernatur blanditiis error fuga hic
                    nesciunt pariatur reprehenderit velit!
                    Asperiores deserunt.
                </p>
            </div>
            <div className='underline w-0 bg-white h-[2px]'/>
        </div>
    );
}

export default ServiceCard;
