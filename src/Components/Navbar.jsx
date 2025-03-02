import './Navbar.css'
import { User2Icon, List, ListIcon, ListCollapse, ListFilter, Menu  } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){

    const [NavOpen,setNavOpen] = useState(0)
    const NavbarList = [
        "Main",
        "UnrealEngine",
        "Web Development",
        "Blender",
        "Unity",
    ]


    function handleNavInteraction(){
        setNavOpen(prev=>(prev == 1 ? 0 : 1))
    }

    return(
        <>
            <motion.div className={'NavbarContainer'}
            animate={NavOpen ? {height:"100%",backgroundColor:"rgba(0, 5, 10, 1)", borderBottom:" rgba(255, 255, 255, 0) 1px solid"} : {backgroundColor:"rgba(0, 5, 10, 0.437)"}}
            transition={{ease:NavOpen ? "circOut" : "circInOut", duration:1}}
            >
                <div style={{width:"80%", display:"flex",justifyContent:"space-between",alignItems:"center",height:"60px",flexShrink:"0"}}>
                    <h1 style={{padding:0, margin:0, fontSize:"20px"}}>nerii.com</h1>
                    <button onClick={handleNavInteraction} className='NavbarButton'>OPEN</button>
                </div>

                <br></br>

                <div style={{display:'flex',width:'80%',flexDirection:"column"}}>
                    <div style={{width:"100%"}}>
                        {NavbarList.map((item,index)=>{
                            return(
                                <>
                                    <motion.div
                                    initial={{skewX:"20deg", opacity:0, x:0,scaleY:0.2,y:50}}
                                    animate={NavOpen && {skewX:"0deg", opacity:1,filter:"blur(0px)", x:0,scaleY:1,y:0}}
                                    transition={{duration:0.5, ease:"circInOut", delay: (NavOpen ? index*0.1 : (NavbarList.length-index)*0.1), type:"tween"}}
                                    >
                                        <p className='NavbarListItem'>
                                        {item}
                                        </p>

                                        <hr></hr>
                                    </motion.div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </>
    )
}