import React from 'react';
import BannerCard from "../cards/BannerCard";
import {BiBrain, BiPaperPlane} from "react-icons/bi";
import {RiLightbulbFlashLine} from "react-icons/ri";
import {useNav} from "../hooks/useNav";

function Banner() {
    const HomeRef = useNav("home")

    function handleClick() {
        document.getElementById("servicesSection")!.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div ref={HomeRef} className='px-8 lg:px-40 py-24 pt-32 pb-8' id='homeSection'>
            <p className='text-cyan-300 uppercase '>
                Creative mind, creative works.
            </p>
            <h1 className='text-7xl font-semibold w-full lg:w-1/2 pb-24
            bg-gradient-to-r bg-clip-text  text-transparent
            from-purple-500 via-cyan-300 to-indigo-500
            animate-text
            '>
                We are digital agency.
            </h1>

            <button onClick={handleClick}
                    className="btn mb-16 px-10 py-5 relative border-2
                border-cyan-300 uppercase font-semibold tracking-wider
                 leading-none overflow-hidden"
                    type="button">
                <span className="absolute inset-0 bg-gradient-to-r
                 text-white from-cyan-300 to-purple-400"></span>
                <span className="absolute inset-0 text-white
                 flex justify-center items-center font-bold">
                Getting started
                </span>
                Getting started
            </button>


            <div className='lg:gap-4 lg:flex '>
                <BannerCard header="Future Concept." icon={<BiPaperPlane/>}/>
                <BannerCard header="The Big Ideas." icon={<BiBrain/>}/>
                <BannerCard header="Creative Solutions." icon={<RiLightbulbFlashLine/>}/>
            </div>
        </div>
    );
}

export default Banner;
