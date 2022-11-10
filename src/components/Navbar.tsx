import React, {useContext, useRef, useState} from 'react';
import NavLink from "./partials/NavLink";
import NavContext from "./context/NavContext";
import {GiHamburgerMenu} from "react-icons/gi";
import divider from "./partials/Divider";
import Divider from "./partials/Divider";
import {comment} from "postcss";


export interface INavElement {
    id: number
    title: string
}

function Navbar() {
    const navElements: INavElement[] = [
        {id: 0, title: 'home'},
        {id: 1, title: 'services'},
        {id: 2, title: 'works'},
        {id: 3, title: 'about'},
        {id: 4, title: 'testimonials'},
        {id: 5, title: 'blog'},
        {id: 6, title: 'contact'},
    ]
    const {activeLinkId} = useContext(NavContext)
    const [showNav, setShowNav] = useState(false)
    const width = window.innerWidth

    function burgerHandler() {
        setShowNav(!showNav)

    }

    return (
        <div className='px-8 lg:px-40 fixed bg-black w-full z-50'>
            <div className='flex text-white justify-between
            py-4 w-full h-full items-center'>
                <div className='text-white text-2xl font-bold'>
                    LOGO
                </div>
                <ul className='gap-4 hidden lg:flex'>
                    {
                        navElements.map((e) => {
                            return (<NavLink
                                key={e.id}
                                id={e.id}
                                title={e.title}
                            />)
                        })
                    }
                </ul>
                <div onClick={burgerHandler}
                     className='block text-cyan-300 text-3xl lg:hidden'>
                    <GiHamburgerMenu/>
                </div>
            </div>
            {showNav &&
                <ul className='flex flex-col gap-4 items-start py-4'>
                    {
                        navElements.map((e) => {
                            return (<NavLink
                                key={e.id}
                                id={e.id}
                                title={e.title}
                            />)
                        })
                    }
                </ul>}
        </div>
    );
}

export default Navbar;
