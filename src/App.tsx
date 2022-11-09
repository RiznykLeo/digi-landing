import React, {ReactNode, useRef} from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/sections/Banner";
import Service from "./components/sections/Service";
import Works from "./components/sections/Works";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import News from "./components/sections/News";
import Contact from "./components/partials/Contact";
import Footer from "./components/sections/Footer";
import Credits from "./components/Credits";
import {NavProvider} from "./components/context/NavContext";


function App() {
    return (
        <div className='bg-black w-full h-full'>
            <NavProvider>
                <Navbar/>
                <Banner/>
                <Service/>
                <Works/>
                <About/>
                <Testimonials/>
                <News/>
                <Contact/>
                <Footer/>
                <Credits/>
            </NavProvider>
        </div>
    );
}

export default App;
