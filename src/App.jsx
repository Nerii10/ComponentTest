import { useState } from 'react'
import HorizontalScroller from './Components/HorizontalScroller'
import ImageSlider from './Components/ImageSlider'
import Navbar from './Components/Navbar'
import Websitelink from './Components/WebsiteLink'
import { TreePalm } from 'lucide-react'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className="MainContainer">
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

        <Websitelink icon={"🌳"} name={"TerrariaWordle"}></Websitelink>
        <br></br>
        <Websitelink icon={"🌤️"} name={"WeatherApp"}></Websitelink>
        <br></br>
        <Websitelink icon={"📖"} name={"Fakebook"}></Websitelink>
        <br></br>
        <Websitelink icon={"🎥"} name={"VideoToGif"}></Websitelink>


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
