import React from 'react';
import {AiFillCalendar, AiFillMail, AiFillPhone} from "react-icons/ai";
import {FaMapMarkerAlt} from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-black px-48 text-white py-12 border-b-gray-500 border-b'
             id='contactSection'>
            <div className='flex justify-between'>
                <ul className='flex flex-col gap-6'>
                    <li className='text-4xl font-bold'>
                        LOGO
                    </li>
                    <li>
                        We are more than a digital agency
                    </li>
                    <li>
                        <div className='h-[2px] bg-cyan-300 w-1/3'/>
                    </li>
                </ul>
                <ul className='flex flex-col gap-6'>
                    <li className=' font-bold uppercase'>
                        contact us
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiFillPhone/>+1234567890
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiFillMail/>anymail@mail.com
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkerAlt/>West Virginia, USA
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiFillCalendar/>Monday to Friday
                    </li>
                </ul>
                <ul className='flex flex-col gap-6'>
                    <li className=' font-bold uppercase'>our services</li>
                    <li>Single project</li>
                    <li>Services 1</li>
                    <li>Services 2</li>
                    <li>Works</li>
                </ul>
                <ul className='flex flex-col gap-6'>
                    <li className=' font-bold uppercase'>about us</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact us 1</li>
                    <li>Contact us 2</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
