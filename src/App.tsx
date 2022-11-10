import React from 'react';
import Navbar from "./components/partials/Navbar";
import Banner from "./components/sections/Banner";
import Service from "./components/sections/Service";
import Works from "./components/sections/Works";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import News from "./components/sections/News";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Credits from "./components/partials/Credits";
import {NavProvider} from "./components/context/NavContext";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-V5P1Q1DY84 ";
ReactGA.initialize(TRACKING_ID);

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
