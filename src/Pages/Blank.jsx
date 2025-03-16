import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import ImageSlider from "../Components/ImageSlider";
import HorizontalScroller from "../Components/HorizontalScroller";
import Projects from "../Components/Projects";

export default function Blank() {
    

    return (
        <>
            <Landing  ScrollTo={"main"}/>
            <Navbar></Navbar>
            <div id="main">
                <br></br>
                <ImageSlider />
            </div>
            <br />
            <div style={{ width: "90%" }} id='scroller'>
                <HorizontalScroller />
            </div>
            <br />
            <Projects />
        </>
    );
}
