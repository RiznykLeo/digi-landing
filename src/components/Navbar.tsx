import React, {useContext, useRef} from 'react';
import NavLink from "./partials/NavLink";


export interface INavElement {
    id: number
    title: string
    checked: boolean
}

function Navbar() {
    const navElements: INavElement[] = [
        {id: 0, title: 'home', checked: true},
        {id: 1, title: 'services', checked: false},
        {id: 2, title: 'works', checked: false},
        {id: 3, title: 'about', checked: false},
        {id: 4, title: 'blog', checked: false},
        {id: 5, title: 'contact', checked: false},
    ]
    return (
        <div className='px-48 fixed bg-black w-full z-50'>
            <div className='flex text-white justify-between
         py-4 w-full h-full items-center'>
                <div className='text-white text-2xl font-bold'>
                    LOGO
                </div>
                <ul className='hidden md:flex gap-6'>
                    {
                        navElements.map((e) => {
                            return (<NavLink
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                checked={e.checked}
                            />)
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
