import React from 'react';
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

function Credits() {
    return (
        <div className='text-white px-8 lg:px-48 py-8'>
            <div className='flex items-center gap-6 pb-4 uppercase text-sm font-bold'>
                <div>Copyright 2022 All right reserved</div>
                <div>privacy policy</div>
                <div>terms of use</div>
            </div>
            <div className='flex justify-between'>
                <div>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                </div>
                <ul className='text-2xl flex gap-2 items-center'>
                    <li><AiFillFacebook/></li>
                    <li><AiFillTwitterCircle/></li>
                    <li><AiFillInstagram/></li>
                    <li><AiFillYoutube/></li>
                </ul>
            </div>
        </div>
    );
}

export default Credits;
