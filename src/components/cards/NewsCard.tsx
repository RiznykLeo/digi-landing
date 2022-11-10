import React from 'react';

interface NewsCardProps {
    header: string
    img: string
}

function NewsCard({img, header}: NewsCardProps) {
    return (
        <div className='border mb-8 lg:w-1/3'>
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
                    className="btn px-10 py-5 relative border-2
                border-cyan-300 uppercase font-bold tracking-wider
                 leading-none overflow-hidden"
                    type="button">
                <span className="absolute inset-0 bg-gradient-to-r
                 text-white from-cyan-300 to-purple-400"></span>
                    <span className="absolute inset-0 text-white
                 flex justify-center items-center font-bold">
                Read more
                </span>
                    Read more
                </button>
            </div>
        </div>
    );
}

export default NewsCard;
