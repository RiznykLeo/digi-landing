import React from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
    return (
        <div className='bg-black w-full h-full'>
            <div className='mx-48'>
                <Navbar/>
                <Banner/>
            </div>

        </div>
    );
}

export default App;
