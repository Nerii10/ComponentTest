import { useState } from 'react'
import Navbar from './assets/Navbar'
import HighlightText from './assets/HighlightedText'
import Breakline from './assets/Breakline'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <div style={{display:"flex", justifyContent:"center"}}>
    <div style={{width:"90%"}}>
    <HighlightText Text="Test test witam test test witam test" Highlight="witam"/>
    </div>
    </div>
    <Breakline Amount={60}></Breakline>

    </>
  )
}

export default App
