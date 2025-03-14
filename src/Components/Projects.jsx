import Websitelink from "./WebsiteLink"
import { useState, useEffect } from "react";
import { Info } from 'lucide-react'
import './Projects.css'

export default function Projects(){

    const data = [
        { icon: "🌳", name: "TerrariaWordle", description: "Wordle-like game inspired by Terraria." },
        { icon: "🌤️", name: "WeatherApp", description: "A weather forecast application using OpenWeather API." },
        { icon: "📖", name: "Fakebook", description: "A social media platform clone with user interactions." },
        { icon: "🎥", name: "VideoToGif", description: "Convert videos into GIFs with ease." }
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
                <h2>Browse my projects</h2>
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
                                <Websitelink icon={entry.icon} name={entry.name} description={entry.description}></Websitelink>
                            </>
                        )
                    })}
                </div>

            </>: " "}
            
           
       
       </div>
        
        </>
    )
}