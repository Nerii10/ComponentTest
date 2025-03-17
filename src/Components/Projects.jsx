import Websitelink from "./WebsiteLink"
import { useState, useEffect } from "react";
import { Info } from 'lucide-react'
import TypingText from "./TypingText";
import './Projects.css'

export default function Projects(){

    const data = [
        {   
            icon: "🌳", 
            name: "TerrariaWordle", 
            description: "Wordle-like game inspired by Terraria.",
            tech: ["jsx", "js", "css", "html", "react", "framermotion"],
            link: "https://nerii10.github.io/TerrariaWordle/"
        },
        {   
            icon: "🌤️", 
            name: "WeatherApp", 
            description: "A weather forecast application using OpenWeather API.",
            tech: ["jsx", "js", "css", "html", "react", "framermotion"],
            link: "https://nerii10.github.io/WeatherApp/"
        },
        {   
            icon: "📖", 
            name: "Fakebook", 
            description: "A social media platform clone with user interactions.",
            tech: ["jsx", "js", "css", "html", "react", "framermotion", "node", "express", "mongodb"],
            link: "https://nerii10.github.io/Fakebook/"
        },
        {   
            icon: "🎥", 
            name: "VideoToGif",
            description: "Convert videos into GIFs with ease.",
            tech: ["jsx", "js", "css", "html", "react", "framermotion"],
            link: "https://nerii10.github.io/VideoToGif/"
        }
    ];
    
    
    
    const [Filtereddata, setFiltereddata] = useState(data)
    const [Searchname, setSearchname] = useState("")
    
    useEffect(() => {
        setFiltereddata(
            data.filter(project =>
                project.name.toLowerCase().includes(Searchname.toLowerCase())
            )
        );
    }, [Searchname]);

    return(
        <>
        <div className="ProjectsContainer">

            <div className="Info">
            </div>
           
            <div className="ProjectSearchBar">
                <input type="text" placeholder="Search project name"
                    onChange={(event) =>{setSearchname(event.target.value)}}
                    value={Searchname}
                ></input>
            </div>
            
            <p>Displaying {Filtereddata.length} of {data.length} projects</p>
            <br></br>
            
            {Filtereddata.length != 0 ?
            <>
                <div className="Projects">
                    {Filtereddata.map((entry,index) =>{
                        return(
                            <>  
                                <Websitelink data={entry}></Websitelink>
                            </>
                        )
                    })}
                </div>

            </>: " "}
            
           
       
       </div>
        
        </>
    )
}