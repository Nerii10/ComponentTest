import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'

import HorizontalScroller from '../Components/HorizontalScroller'
import ImageSlider from '../Components/ImageSlider'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import Experience from '../Components/Experience'
import AnimatedCounting from '../Components/AnimatedCounting'
import TypingText from '../Components/TypingText'
import Landing from '../Components/Landing'

import { TreePalm } from 'lucide-react'
function Test() {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      
      const scrolled = (scrollTop / (winHeight)) * 100;
      
      setScrollProgress(scrolled);

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
    {/**/}
    {scrollProgress >= 100 && <Navbar></Navbar> }
    
      <Landing></Landing>
      <div className="MainContainer" id='MainContainer'>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>



        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          <hr></hr>
      <TypingText Type={"h1"} Text={"Image slider"}></TypingText>
       

        
        <ImageSlider></ImageSlider>
        <br></br>
        <br></br>
        <hr></hr>
      <TypingText Type={"h1"} Text={"Horizontal Scroller"}></TypingText>
      <br></br>
      <br></br>
        <HorizontalScroller></HorizontalScroller>

        <br></br>
        <br></br>
        <hr></hr>

        <Projects></Projects>

        <br></br>

      </div>  

      <Footer></Footer> 
    </>
  )
}

export default Test
