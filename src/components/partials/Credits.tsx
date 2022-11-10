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
                    <p>
                        Developed by Leonid Riznyk
                    </p>
                    <p>
                        <a target="_blank" href="https://riznyk-leo.dev/">
                            https://riznyk-leo.dev/
                        </a>
                    </p>

                </div>
                <ul className='text-2xl flex gap-2 items-center'>
                    <a target='_blank' href='https://www.facebook.com/login/' rel="noreferrer">
                        <li><AiFillFacebook/></li>
                    </a>
                    <a target='_blank' href='https://twitter.com/' rel="noreferrer">
                        <li><AiFillTwitterCircle/></li>
                    </a>
                    <a target='_blank' href='https://www.instagram.com/' rel="noreferrer">
                        <li><AiFillInstagram/></li>
                    </a>
                    <a target='_blank' href='https://www.youtube.com/' rel="noreferrer">
                        <li><AiFillYoutube/></li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Credits;
