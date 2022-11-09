import React, {useContext, useRef} from 'react';
import NavLink from "./partials/NavLink";
import NavContext from "./context/NavContext";


export interface INavElement {
    id: number
    title: string
}

function Navbar() {
    const {activeLinkId} = useContext(NavContext)

    const navElements: INavElement[] = [
        {id: 0, title: 'home'},
        {id: 1, title: 'services'},
        {id: 2, title: 'works'},
        {id: 3, title: 'about'},
        {id: 4, title: 'testimonials'},
        {id: 5, title: 'blog'},
        {id: 6, title: 'contact'},
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
                            />)
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
