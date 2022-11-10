import React from 'react';
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";

function Contact() {
    return (
        <div className='relative h-[400px]'>
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
             z-20 text-white flex flex-col items-center gap-8 w-full'>
                <ul className='flex gap-4 text-2xl'>
                    <a target='_blank' href="https://www.facebook.com/" rel="noreferrer">
                        <li className='p-2 rounded-full border-2 border-cyan-300'>
                            <BsFacebook/>
                        </li>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/" rel="noreferrer">
                        <li className='p-2 rounded-full border-2 border-cyan-300'>
                            <BsInstagram/>
                        </li>
                    </a>
                    <a target='_blank' href="https://twitter.com/" rel="noreferrer">
                        <li className='p-2 rounded-full border-2 border-cyan-300'>
                            <AiFillTwitterCircle/>
                        </li>
                    </a>
                    <a target='_blank' href="https://www.youtube.com/" rel="noreferrer">
                        <li className='p-2 rounded-full border-2 border-cyan-300'>
                            <AiFillYoutube/>
                        </li>
                    </a>
                </ul>
                <h2 className='text-center text-4xl px-8 w-full font-bold'>
                    Have any project in mind?
                </h2>

                <a target='_blank' href="mailto:anymail@mail.com" rel="noreferrer">
                    <button className="btn px-10 py-5 relative border-2
                border-cyan-300 uppercase tracking-wider
                 leading-none overflow-hidden font-bold"
                            type="button">
                <span className="absolute inset-0 bg-gradient-to-r
                 text-white from-cyan-300 to-purple-400"></span>
                        <span className="absolute inset-0 text-white
                 flex justify-center items-center font-bold">
                    Make Inquiry
                </span>
                        Make Inquiry
                    </button>
                </a>
            </div>

            <div className='w-full h-full top-0 left-0 absolute z-10 bg-black opacity-70'/>
            <img
                className='h-full w-full absolute top-0 left-0 object-cover z-0'
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="bg"/>
        </div>
    );
}

export default Contact;
