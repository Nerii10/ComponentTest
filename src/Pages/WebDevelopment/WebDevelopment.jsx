import '../subpage.css'

import Projects from "../../Components/Projects";
import HorizontalScroller from "../../Components/HorizontalScroller";
import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";
import Navbar from "../../Components/Navbar";
import AnimatedCounting from "../../Components/AnimatedCounting"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { CodeXml } from "lucide-react";
import { File } from 'lucide-react';
import { Scan } from "lucide-react";

export default function WebDevelopment() {


    return(
        <>
            <Navbar></Navbar>
            <br /><br /><br />


            <div className="SubpageContainer">

                <div style={{width:"100%"}}>

                    <div className="SiteTopicHeader">
                        <CodeXml size={40}/>
                        <h1>Web Development</h1>
                    </div>
                    
                    <hr className="HrFade" />

                    <p>
                        I have been developing websites for <AnimatedCounting Number={4} Speed={500}></AnimatedCounting>+ months, focusing on modern, responsive, and interactive applications.
                        My stack includes React, Express, and Node.js, with Framer Motion for smooth animations.
                    </p>

                </div>


                <div style={{width:"100%"}}>
                    <div className="SiteTopicHeader">
                        <File size={40}/>
                        <h2>Selected Works</h2>
                    </div>

                    <hr className="HrFade" />

                    <br></br>
                    
                    <Projects Category={"web"}></Projects>

                </div>


            </div>               


            <div style={{height:"200px"}}></div>

            <Footer></Footer>

        </>
    )
}