import React from 'react';
import Header from "../partials/Header";
import Divider from "../partials/Divider";
import TestimonialsCard from "../cards/TestimonialsCard";
import {SiAdobe, SiAffinity, SiAlitalia, SiAnalogue, SiApachekafka, SiDigg} from "react-icons/si";

function Testimonials() {
    return (
        <div className="bg-[rgb(5,10,10)]" id="testimonialsSection">
            <Header header="Testimonials." prompt="We're more than digital agency"/>
            <div className='flex justify-between gap-4 px-48'>
                <TestimonialsCard
                    img='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    name='Kristiano Lupa'
                    position='CTO'/>
                <TestimonialsCard
                    img='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
                    name='Agnolio Vescucci'
                    position='Web Designer'/>
                <TestimonialsCard
                    img='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    name='Marena Dola'
                    position='Graphic Designer'/>
            </div>
            <ul className='flex justify-between text-white px-48 text-4xl py-16'>
                <li><SiAdobe/></li>
                <li><SiDigg/></li>
                <li><SiAffinity/></li>
                <li><SiAnalogue/></li>
                <li><SiApachekafka/></li>
                <li><SiAlitalia/></li>
            </ul>
            <Divider/>
        </div>
    );
}

export default Testimonials;
