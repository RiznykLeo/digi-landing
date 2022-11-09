import React, {ReactNode, useRef} from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Service from "./components/sections/Service";
import Works from "./components/sections/Works";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import News from "./components/sections/News";
import Contact from "./components/partials/contact";
import Footer from "./components/sections/Footer";
import Credits from "./components/Credits";

function App() {
    return (
        <div className='bg-black w-full h-full'>
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
        </div>
    );
}

export default App;
