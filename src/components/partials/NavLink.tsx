import React, {useContext} from 'react';

import {INavElement} from "../Navbar";
import NavContext from "../context/NavContext";

function NavLink({title}: INavElement) {
    const scrollTo = `${title}Section`
    const {activeLinkId} = useContext(NavContext)

    function handleClick() {
        document.getElementById(scrollTo)!.scrollIntoView({behavior: "smooth"})
    }

    console.log(activeLinkId)
    return (
        <li onClick={handleClick}
            className='text-white font-bold uppercase'>
            {title}
            <div className={activeLinkId == title ?
                'h-[2px] w-full bg-cyan-300 duration-200' :
                'h-[2px] w-0 bg-cyan-300 duration-200'}/>
        </li>
    )
}

export default NavLink;
