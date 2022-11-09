import React from 'react';
import Header from "../partials/Header";
import Divider from "../partials/Divider";
import AboutCard from "../cards/AboutCard";
import {useNav} from "../hooks/useNav";

function About() {
    const AboutRef = useNav("about")
    return (
        <div ref={AboutRef} id='aboutSection'>
            <Header header="About." prompt="We are more than digital agency"/>
            <div className='flex justify-between mx-48 gap-4'>
                <AboutCard header='Who we are'
                           border={false}
                           img='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'/>
                <AboutCard header='Our philosophy'
                           border={true}
                           img='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                <AboutCard header='How we work'
                           border={true}
                           img='https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>

            </div>
            <Divider/>
        </div>
    );
}

export default About;
