import { useState } from 'react'
import HorizontalScroller from './Components/HorizontalScroller'
import ImageSlider from './Components/ImageSlider'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import { TreePalm } from 'lucide-react'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className="MainContainer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1>Test</h1>

        <HorizontalScroller></HorizontalScroller>

        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <ImageSlider></ImageSlider>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Projects></Projects>

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
      </div>
    </>
  )
}

export default App
