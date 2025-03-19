import '../Subpage.css'

import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";
import Navbar from "../../Components/Navbar";
import Projects from '../../Components/Projects';
import AnimatedCounting from '../../Components/AnimatedCounting';
import { useEffect } from 'react';

import { Scan } from "lucide-react";
import { File } from 'lucide-react';

export default function UnrealEngine() {


   

    return(
        <>
            <Navbar />
            <br /><br /><br />

            <div className="SubpageContainer">

                <div style={{width:"100%"}}>

                    <div className="SiteTopicHeader">
                        <img src="/ComponentTest/Logo/unrealenginewhite.png" style={{width:"40px"}} alt="Unreal Engine Logo" />
                        <h1>Unreal Engine</h1>
                    </div>
                
                    <hr className="HrFade" />

                    <div>
                        <p>
                            With <AnimatedCounting Number={5} Speed={400}/>+ years of experience in Unreal Engine. <br></br><br></br>I create interactive experiences using Blueprints and C++.  
                            I focus on gameplay mechanics, visual quality, and performance to bring immersive worlds to life.  
                            Below is a selection of my Unreal Engine projects.
                            <br></br>
                            <br></br>
                            Please note that I've created countless projects that aren't showcased here, as many were built for learning purposes.  
                        </p>
                    </div>

                </div>

                <div style={{width:"100%"}}>

                    <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                        <File size={35} />
                        <h1 style={{margin:0}}>Selected Works</h1>
                    </div>

                    <hr className="HrFade" />
                    <br />

                    <Projects Category={"game"}></Projects>

                </div>


            </div>               

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </>
    )
}
