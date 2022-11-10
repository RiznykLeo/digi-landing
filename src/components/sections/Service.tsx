import React from 'react';
import ServiceCard from "../cards/ServiceCard";
import {FaGlobe, FaPen, FaSignal} from "react-icons/fa";
import {BsFillBookmarkFill, BsFillPeopleFill} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5";
import Header from "../partials/Header";
import Divider from "../partials/Divider";
import {useNav} from "../hooks/useNav";

function Service() {
    const ServicesRef = useNav('services')
    return (
        <div ref={ServicesRef} className='text-white bg-[rgb(5,10,10)]' id='servicesSection'>
            <Header header='Services.' prompt='our services for clients'/>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 px-8 lg:px-40'>
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
