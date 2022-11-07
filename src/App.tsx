import React from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Works from "./components/Works";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Contact from "./components/partials/contact";

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
        </div>
    );
}

export default App;
