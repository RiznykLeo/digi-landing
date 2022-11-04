import React from 'react';

interface NewsCardProps {
    header: string
    img: string
}

function NewsCard({img, header}: NewsCardProps) {
    return (
        <div className='border w-1/3'>
            <img
                className="w-full h-[300px] object-cover"
                src={img}
                alt="news image"/>
            <div className='p-4 flex-col flex gap-4'>
                <h3 className='text-xl font-bold'>
                    {header}
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Omnis, quas!
                </p>
                <button
                    className='border border-cyan-300 font-bold
                     px-4 py-2 w-full text-start'>
                    Read More
                </button>
            </div>
        </div>
    );
}

export default NewsCard;
