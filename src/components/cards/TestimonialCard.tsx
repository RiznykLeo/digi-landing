import React from 'react';
import {AiFillStar} from "react-icons/ai";

interface TestimonialsCardProps {
    img: string
    name: string
    position: string
}

function TestimonialCard(props: TestimonialsCardProps) {
    return (
        <div className='border flex flex-col mb-8 lg:w-1/4
        items-center bg-zinc-900 p-8 text-white'>
            <p className='mb-4 w-[80%]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit .
                Amet beatae corporis, cumque debitis distinctio ducimus est
                ipsam iusto minus
            </p>

            <div className='flex gap-1 text-amber-300 mb-4'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='mb-4'>
                <img src={props.img} alt="avatar"
                     className='rounded-full w-[75px] h-[50px]  object-cover'/>
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.position}
            </div>
        </div>
    );
}

export default TestimonialCard;
