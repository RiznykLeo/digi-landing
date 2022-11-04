import React from 'react';
import ServiceCard from "./cards/ServiceCard";
import {FaGlobe, FaPen, FaSignal} from "react-icons/fa";
import {BsBookFill, BsFillBookmarkFill, BsFillPeopleFill} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5";
import Header from "./partials/Header";
import Divider from "./partials/Divider";

function Service() {
    return (
        <div className='text-white bg-[rgb(5,10,10)]'>
            <Header header='Services.' prompt='our services for clients'/>
            <div className='grid grid-cols-3 grid-rows-2 gap-4 mx-48'>
                <ServiceCard header='Digital Strategy' icon={<FaSignal/>}/>
                <ServiceCard header='UX Designs' icon={<FaPen/>}/>
                <ServiceCard header='UI Designs' icon={<BsFillPeopleFill/>}/>
                <ServiceCard header='Social Media' icon={<FaGlobe/>}/>
                <ServiceCard header='Design Concept' icon={<BsFillBookmarkFill/>}/>
                <ServiceCard header='Media Pairing' icon={<IoStatsChartSharp/>}/>
            </div>
            <Divider/>
        </div>
    );
}

export default Service;
