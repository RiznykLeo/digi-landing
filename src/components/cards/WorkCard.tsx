import React from 'react';

interface WorkCardProps {
    img: string
}

function WorkCard(props: WorkCardProps) {
    return (
        <div className='workcard lg:w-[175px] lg:h-[400px] h-[300px] relative mb-8'>
            <img className=" w-full h-full object-cover"
                 src={props.img}
                 alt="work demo"/>
            <div className='filter absolute z-10 top-0 left-0 w-full h-full
             bg-black bg-opacity-20'/>
            <div className='filter absolute z-20 top-0 left-0 w-full h-full
             bg-cyan-900 bg-opacity-60'/>
        </div>
    );
}

export default WorkCard;
