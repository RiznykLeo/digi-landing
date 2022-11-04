import React from 'react';
import ServiceCard from "./ServiceCard";
import {FaGlobe, FaPen, FaSignal} from "react-icons/fa";
import {BsBookFill, BsFillBookmarkFill, BsFillPeopleFill} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5";

function Service() {
    return (
        <div className='text-white bg-[rgb(5,10,10)]'>
            <div className='py-8 mx-48'>
                <div className='flex items-center gap-6 mb-4'>
                    <div className='w-[100px] h-[1px] bg-cyan-300 mt-2'></div>
                    <h2 className='text-4xl font-bold align-middle '>Services</h2>
                </div>
                <p className="text-cyan-300 uppercase">
                    Our services for clients
                </p>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-4 mx-48'>
                <ServiceCard header='Digital Strategy' icon={<FaSignal/>}/>
                <ServiceCard header='UX Designs' icon={<FaPen/>}/>
                <ServiceCard header='UI Designs' icon={<BsFillPeopleFill/>}/>
                <ServiceCard header='Social Media' icon={<FaGlobe/>}/>
                <ServiceCard header='Design Concept' icon={<BsFillBookmarkFill/>}/>
                <ServiceCard header='Media Pairing' icon={<IoStatsChartSharp/>}/>
            </div>
            <div className='flex justify-center py-8'>
                <div className='w-[1px] h-[100px] bg-cyan-300'>
                </div>
            </div>
        </div>
    );
}

export default Service;
