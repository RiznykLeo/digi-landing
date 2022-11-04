import React from 'react';

interface NavElementProps {
    content: string
}

function NavElement(props: NavElementProps) {
    return (
        <li className='text-white font-bold uppercase border-b-2 border-b-cyan-300'>
            {props.content}
        </li>
    );
}

export default NavElement;
