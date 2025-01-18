import { useState } from 'react'
import Navbar from './assets/Navbar'
import HighlightText from './assets/HighlightedText'
import Breakline from './assets/Breakline'
import { motion } from 'framer-motion'
import ImageSlider from './assets/ImageSlider'
import { view } from 'framer-motion/client'
import Footer from './assets/Footer'

function App() {

  return (
    <>
    <Breakline Amount={1}></Breakline>
    <Navbar></Navbar>

    <HighlightText Text="Test test witam test test witameeee test" Highlight="witam"/>
    
    <Breakline Amount={1}></Breakline>
        <ImageSlider Size={"90%"} DisplayedImages={[ "/ComponentTest/Render1.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render5.png",
        "/ComponentTest/Render6.png",]}></ImageSlider>
             
    <Breakline Amount={1}></Breakline>
    <h1>witam</h1>
    <Breakline Amount={60}></Breakline>
    <Footer></Footer>
    </>
  )
}

export default App
