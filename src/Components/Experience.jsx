import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, } from "framer-motion"
export default function Experience(){

    const [CurrentSkill, setCurrentSkill] = useState(0)

    const Skills = ["Programmer", "Web Developer" , "Game Designer" , "Video Editor", "Graphic designer"]

 

    useEffect(()=>{
        setInterval(()=>{
            setCurrentSkill(prev=>{
                if(prev >= Skills.length - 1){
                    return 0;
                }
                return prev+1
            })
        },3000)
    },[])


    return(
        <>
        <div style={{display:'flex',flexDirection:"row",alignItems:'center', transition:"1s ease", width:"fit-content",margin:0, height:"50px"}}>
        <motion.h1 style={{margin:0,whiteSpace:"nowrap"}}
            >
                I'm a
            </motion.h1>
        <AnimatePresence mode="sync">
        
        <div style={{position:'relative', width:"",height:"100%", display:"flex",alignItems:"center", marginLeft:'10px'}}>
            
        <motion.h1
                key={CurrentSkill}
                style={{position:"absolute",
                color:"transparent",
                background: "linear-gradient(360deg, rgb(144, 0, 255) 0%, rgb(255, 255, 255) 100%)",
                WebkitBackgroundClip:"text",
                }}
                transition={{
                    duration: 0.5,
                    type: "spring", 
                    stiffness: 200,
                    damping: 30,
                    ease:"circInOut"
                }}
                initial={{ y: -40, opacity: 0,width:"fit-content",whiteSpace:"nowrap"}}
                animate={{ scaleY:1,y: 0, opacity: 1, width:"fit-content" }}
                exit={{ y: 20, opacity:0,width:"0px", scaleY:0.2}}
            >
                {Skills[CurrentSkill]}
            </motion.h1>
        </div>

     
        </AnimatePresence>

        </div>
     
        </>
    )
}