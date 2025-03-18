import AnimatedCounting from "../Components/AnimatedCounting"
import Experience from "../Components/Experience"
import HorizontalScroller from "../Components/HorizontalScroller"
import Navbar from "../Components/Navbar"
import Landing from "../Components/Landing"
import Projects from "../Components/Projects"
import { motion } from "framer-motion"
import { useState } from "react"


import './styles/MainPage.css'


import { MoveDown } from "lucide-react"
import { Binary } from "lucide-react"
import { Info } from "lucide-react"
import {CodeXml} from 'lucide-react'
import { Frame } from "lucide-react"
import { Server } from "lucide-react"
import { Joystick } from "lucide-react"
import { FileImage } from "lucide-react"
import { User } from "lucide-react"
import { File } from "lucide-react"

export default function MainPage(){

    const [Aboutseen, setAboutseen] = useState(0)

    const IconSize = 35;

    const Skills = [
        {
            "icon": <CodeXml size={IconSize}/>,
            "category": "Main Programming Languages",
            skills: [{
                name: "Javascript",
                logo: "js.png"
            },{
                name: "C++",
                logo: "cpp.png"
            },{
                name: "C#",
                logo: "csh.png"
            },{
                name: "Python",
                logo: "py.png"
            },
            ]
        },
        {
            "icon": <Frame size={IconSize}/>,
            "category": "Frameworks & Libraries",
            skills: [{
                name: "React",
                logo: "react.png"
            },{
                name: "Framer",
                logo: "framermotion.png"
            }
            ]
        },
        {
            "icon": <Server size={IconSize}/>,
            "category": "Backend",
            skills: [{
                name: "Node.js",
                logo: "node.png"
            },{
                name: "Express",
                logo: "express.png"
            },{
                name: "REST API",
                logo: "restapi.png"
            },{
                name: "MongoDB",
                logo: "mongodb.png"
            }
            ]
        },
        {
            "icon": <Joystick size={IconSize}/>,
            "category": "Game Development",
            skills: [{
                name: "Unreal Engine",
                logo: "unrealengine.png"
                
            },{
                name: "Blender",
                logo: "blender.png"
            }
            ]
        },
        {
            "icon": <FileImage size={IconSize}/>,
            "category": "Graphic & UI/UX",
            skills: [{
                name: "UI/UX Design",
                logo: "uiux.png"
            },{
                name: "Adobe Photoshop",
                logo: "ps.png"
            },{
                name: "Responsive Desgin",
                logo: "responsive.png"
            }
            ]
        },
        {
            "icon": <User size={IconSize}/>,
            "category": "Soft Skills",
            skills: [{
                name: "Problem Solving",
                logo: "problemsolving.png"
            },{
                name: "Adaptability",
                logo: "adaptability.png"
            },{
                name: "Teamwork",
                logo: "teamwork.png"
            },{
                name: "Self-Learning",
                logo: "selflearning.png"
            },{
                name: "Critical Thinking",
                logo: "criticalthinking.png"
            },{
                name: "Attention to Detail",
                logo: "attentiondetail.png"
            }
            ]
        }
    ]

    function Highlight({text,delay,marginTop}) {
        return(
            <span style={{ position: 'relative' }}>
            <motion.span
                style={{
                    position: "absolute",
                    width: "0%",
                    height: "100%",
                    backgroundColor: 'rgb(55, 0, 255)',
                    zIndex: -1,
                    marginTop: marginTop ? marginTop : "0px"
                }}
                initial={{ width: "0%" }}
                animate={Aboutseen && { width: "100%" }}
                transition={{ duration: 1, ease: "circOut", delay: delay ? delay : 0 }}
            />
            {text ? text : "No text"}
        </span>
        )
    }
    

    return(
        <>
        <Navbar hide={1} hideY={"700"}></Navbar>
        <Landing ScrollTo={"Main"}></Landing>


        
        <div style={{width:"90%"}}  id="Main">
            <HorizontalScroller></HorizontalScroller>
        </div>

        <br></br>

        <div className="MainPageContainer">

                <motion.div className="About"
                whileInView={()=>{setAboutseen(1)}}
                viewport={{amount:1}}
                >   
                        <h1 style={{display:'flex', alignItems:"center", gap:"10px",margin:0}} ><User size={30}></User>About Me</h1>
                        <hr className="HrFade"></hr>
                        
                        <p>I'm {" "}
                    
                        <Highlight text={"Mikołaj Kozak"} marginTop={"3.5px"} delay={0.2}/>

                        {" "}and I am a <AnimatedCounting Number={19} Speed={50}></AnimatedCounting> year-old programmer with a lifelong passion for what I do.</p>
                
                        <p>My journey started with simple photo editing, which soon evolved into game development in {" "}
                        
                        <Highlight text={"Unreal Engine"} marginTop={"3.5px"} delay={0.6}/>

                        . {" "}Over time, I expanded my skills to  {" "}
                        
                        <Highlight text={"Web development"} marginTop={"3.5px"}delay={1}/>
                        
                        , working with technologies such as {" "}
                            
                        <Highlight text={"JavaScript, React, and Node.js "} marginTop={"3.5px"}delay={1.4}/>
                        
                        {" "} ,constantly exploring new tools and improving my craft.</p>
                        <p>I am always looking for new challenges and exciting projects to work on, continuing to grow as a developer and innovator.</p>


                </motion.div>
        


                
   
                
                <div className="SkillsContainer">
                    
                    <div className="SkillsSummary">
                        <Info size={30}></Info>
                        <h1 style={{margin:0}}>Skills & Technologies</h1>
                    </div>  
                    <hr className="HrFade"></hr>



                   {Skills.map((element,index)=>{
                        
                            return(
                                <>
                                    <div  className="Technology">
                                        {element.icon}
                                        <h2 style={{width:"fit-conent", margin:0}}>{element.category}</h2>
                                    </div>
                                    <p  style={{margin:0, }} className="TechnologyContainer">{element.skills.map((skill,index)=>{
                                        return(
                                            <p style={{display:"flex",alignItems:"center",gap: "10px"}} className="TechnologyEntry"> 
                                                {skill.logo && <img src={`/ComponentTest/Logo/${skill.logo}`} className="Logo"></img>}
                                               {skill.name} {" "} 
                                            </p>
                                        
                                        )
                                    })}</p>
                    <hr className="HrFade"></hr>

                                </>
                            )
                    })}
                </div>
                
                <div className="ProjectsMainContainer">
                    <div>
                        <h1 style={{display:'flex', alignItems:"center", gap:"10px",margin:0}} ><File size={30}></File>Most recent projects</h1>
                        <hr className="HrFade"></hr>
                    </div>
                    <Projects></Projects>
                </div>
                
                
                


                <div style={{height:"500px"}}>
                </div>
        
        </div>
         
       
        </>
    )
}