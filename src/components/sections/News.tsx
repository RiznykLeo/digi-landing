import React from 'react';
import Divider from "../partials/Divider";
import NewsCard from "../cards/NewsCard";
import {useNav} from "../hooks/useNav";

function News() {
    const NewsRef = useNav('blog')
    return (
        <div ref={NewsRef} className='flex flex-col items-center text-white mt-4' id='blogSection'>
            <h2 className='text-2xl font-bold'>
                Latest News.
            </h2>
            <p className='text-cyan-300 uppercase mb-16'>
                Check out some of our news
            </p>
            <div className='flex justify-between mx-48 gap-4'>
                <NewsCard
                    header='Could this VR sketching tool be in coming of age for designers  in the future?'
                    img='https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'/>
                <NewsCard
                    header='8 cities That Show You What the Future Will Look Like (Innovative ideas)'
                    img='https://images.unsplash.com/photo-1517570123306-d58896657b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                <NewsCard
                    header='15 Gift ideas for om and dad. Whenever they are this fast year 2022'
                    img='https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>

            </div>
            <Divider/>
        </div>
    );
}

export default News;
