import React, {useState} from 'react';

export const NavContext = React.createContext<any | null>(null)

export function NavProvider({children}: any) {
    const [activeLinkId, setActiveLinkId] = useState('')
    const providerValue = {
        activeLinkId,
        setActiveLinkId,
    }
    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext;
