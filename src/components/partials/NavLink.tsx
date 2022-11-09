import React from 'react';

import {INavElement} from "../Navbar";

function NavLink({checked, title}: INavElement) {
    const scrollTo = `${title}Section`

    function handleClick() {
        document.getElementById(scrollTo)!.scrollIntoView({behavior: "smooth"})
    }

    return (
        <li onClick={handleClick}
            className={!checked ?
                'text-white font-bold uppercase' :
                'text-white font-bold uppercase ' +
                'border-b-2 border-b-cyan-300'}>
            {title}
        </li>
    )
}

export default NavLink;
