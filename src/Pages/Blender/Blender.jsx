import '../Subpage.css'

import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";
import Navbar from "../../Components/Navbar";
import Projects from '../../Components/Projects';
import AnimatedCounting from '../../Components/AnimatedCounting';

import { ArrowDown, Scan } from "lucide-react";
import { File } from 'lucide-react';
import { useEffect } from 'react';

export default function Blender() {

  

    return(
        <>
            <Navbar />
            <br /><br /><br />

            <div className="SubpageContainer">

                <div style={{width:"100%"}}>

                    <div className="SiteTopicHeader">
                        <img src="/ComponentTest/Logo/blender.png" style={{width:"40px"}} alt="Unreal Engine Logo" />
                        <h1>Blender</h1>
                    </div>
                
                    <hr className="HrFade" />

                    <div>
                        <p>
                            With <span><AnimatedCounting Number={700} Speed={2}/></span>+ hours of experience in Blender,  
                            I focus on creating high-quality 3D models with precision and aesthetics.  
                            My workflow includes modeling, texturing, and rendering to achieve polished results,  
                            with a primary focus on assets designed for games.  
                            <br /><br />
                            Here are a few of my selected works, each showcasing attention to detail and creativity.
                        </p>
                        <ArrowDown />
                    </div>

                </div>

                <div style={{width:"100%"}}>

                    <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                        <File size={35} />
                        <h1 style={{margin:0}}>Selected 3D Works</h1>
                    </div>

                    <hr className="HrFade" />
                    <br />

                    <ImageSlider Images={["/Render2.png","/Render4.png","/Render5.png","/Render6.png","/Render1.png",]}></ImageSlider>

                </div>


            </div>               

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </>
    )
}
