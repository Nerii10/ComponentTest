import { useState } from 'react'
import Navbar from './assets/Navbar'
import HighlightText from './assets/HighlightedText'
import Breakline from './assets/Breakline'
import { motion } from 'framer-motion'
import ImageSlider from './assets/ImageSlider'
import { view } from 'framer-motion/client'

function App() {

  return (
    <>\
    <Breakline Amount={1}></Breakline>
    <Navbar></Navbar>

    <HighlightText Text="Test test witam test test witam test" Highlight="witam"/>
    
    <Breakline Amount={5}></Breakline>
    
        <ImageSlider Size={350}></ImageSlider>
    <Breakline Amount={1}></Breakline>
    <Breakline Amount={60}></Breakline>

    </>
  )
}

export default App
