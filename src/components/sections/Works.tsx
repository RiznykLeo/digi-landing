import React from 'react';
import Header from "../partials/Header";
import Divider from "../partials/Divider";
import WorkCard from "../cards/WorkCard";
import {useNav} from "../hooks/useNav";

function Works() {
    const WorksRef = useNav('works')
    return (
        <div ref={WorksRef} className='bg-zinc-900' id='worksSection'>
            <Header header="Works." prompt="things we've made"/>
            <div className='flex justify-between gap-4 mx-48'>
                <WorkCard
                    img='https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
                <WorkCard
                    img='https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'/>
                <WorkCard
                    img='https://images.unsplash.com/photo-1591051270770-b268b0189078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                <WorkCard
                    img='https://images.unsplash.com/photo-1492065438790-d3c90cbc6e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
                <WorkCard
                    img='https://images.unsplash.com/photo-1536670200388-520780010dd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'/>
                <WorkCard
                    img='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'/>
            </div>
            <Divider/>
        </div>
    );
}

export default Works;
