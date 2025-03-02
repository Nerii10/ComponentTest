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
            animate={NavOpen ? {height:"100%",backgroundColor:"rgb(5, 5, 5)", borderBottom:" rgba(255, 255, 255, 0) 1px solid"} : {backgroundColor:"rgb(5, 5, 5)"}}
            transition={{ease:NavOpen ? "circOut" : "circInOut", duration:1}}
            >
                <div style={{width:"80%", display:"flex",justifyContent:"space-between",alignItems:"center",height:"60px",flexShrink:"0"}}>
                    <h1 style={{padding:0, margin:0, fontSize:"20px"}}>nerii.com</h1>
                    <motion.button onClick={handleNavInteraction} className='NavbarButton'
                    whileHover={{scale:1.15}}
                    whileTap={{scale:0.8}}
                    >OPEN</motion.button>
                </div>

                <br></br>

                <div style={{display:'flex',width:'80%',flexDirection:"column"}}>
                    <div style={{width:"100%"}}>
                        {NavbarList.map((item,index)=>{
                            return(
                                <>
                                    <motion.div
                                    initial={{skewX:"20deg", opacity:0, x:0,scaleY:0.2,y:50,filter:"blur(2px)"}}
                                    animate={NavOpen && {skewX:"0deg", opacity:1,filter:"blur(0px)", x:0,scaleY:1,y:0}}
                                    transition={{duration:0.5, ease:"circInOut", delay: (NavOpen ? index*0.1 : (NavbarList.length-index)*0.1), type:"tween"}}
                                    style={{display:'flex', justifyContent:"center",flexDirection:"column", alignItems:"baseline"}}
                                    >
                                       

                                        <p className='NavbarListItem'>
                                        {item}
                                        </p>
                                        
                                        <motion.hr
                                        style={{position:"absolute",marginTop:"50px",}}
                                        initial={{width:"0%",opacity:0}}
                                        animate={NavOpen ? {width:"100%",opacity:1} : {width:"0%",opacity:0}}
                                        transition={{duration:0.5, delay: (NavOpen ? index*0.1 : (NavbarList.length-index)*0.1) }}
                                        ></motion.hr>
                                        

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