import React from 'react';
import NavElement from "./partials/NavElement";

function Navbar() {
    return (
        <div className='px-48'>
            <div className='flex text-white justify-between
         py-4 w-full h-full items-center'>
                <div className='text-white text-2xl font-bold'>
                    LOGO
                </div>
                <ul className='hidden md:flex gap-6'>
                    <NavElement content="home"/>
                    <NavElement content="services"/>
                    <NavElement content="works"/>
                    <NavElement content="about"/>
                    <NavElement content="blog"/>
                    <NavElement content="contact"/>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
