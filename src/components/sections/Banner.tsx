import React, {useRef} from 'react';
import BannerCard from "../cards/BannerCard";
import {BiBrain, BiPaperPlane} from "react-icons/bi";
import {RiLightbulbFlashLine} from "react-icons/ri";
import {useNav} from "../hooks/useNav";

function Banner() {
    const HomeRef = useNav("home")
    return (
        <div ref={HomeRef} className='px-48 py-24 pt-32 pb-8' id='homeSection'>
            <p className='text-cyan-300 uppercase mb-4'>
                Creative mind, creative works.
            </p>
            <h1 className='text-white text-7xl font-bold w-1/2 mb-24'>
                We are digital agency.
            </h1>
            <button className='border-2 border-cyan-300
             text-white font-bold py-4 px-4 uppercase text-lg w-1/4 mb-24'>
                getting started
            </button>
            <div className='flex gap-4'>
                <BannerCard header="Future Concept." icon={<BiPaperPlane/>}/>
                <BannerCard header="The Big Ideas." icon={<BiBrain/>}/>
                <BannerCard header="Creative Solutions." icon={<RiLightbulbFlashLine/>}/>
            </div>
        </div>
    );
}

export default Banner;
