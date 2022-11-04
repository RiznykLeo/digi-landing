import React from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Works from "./components/Works";

function App() {
    return (
        <div className='bg-black w-full h-full'>
            <div className='mx-48'>
                <Navbar/>
                <Banner/>
            </div>
            <Service/>
            <Works/>

        </div>
    );
}

export default App;
