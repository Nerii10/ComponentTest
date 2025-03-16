import './Landing.css'
import Experience from './Experience'
import { motion } from 'framer-motion'
import {ArrowDown} from 'lucide-react'

export default function Landing({ScrollTo}){
    return(
        <>
            <div className='Landing' style={{fontSize:"2.5vw"}}>
                <div style={{left:"10%",top:"25%", position:'absolute'}}>
                    <h1 style={{margin:0}}>Hi, I'm nerii.</h1>
                    <Experience></Experience>
                </div>
                <div style={{left:"50%",transform: 'translateX(-50%) translateY(-50%)',top:"80%", position:'absolute'}}>
                     
                <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    animate={{
        y: ["-10px", "30px"],
        scaleY: [1,1.1]
    }}
    transition={{
        y: {
            repeat: Infinity,  // Powtarza animację w nieskończoność
            repeatType: "mirror",  // Odbicie animacji (w górę i w dół)
            duration: 1,  // Czas trwania animacji osi Y
            ease: "circInOut",  // Płynne przejście
        },
        scaleY: {
            repeat: Infinity,  // Powtarza animację w nieskończoność
            repeatType: "mirror",  // Odbicie animacji (w górę i w dół)
            duration: 1,  // Czas trwania animacji osi Y
            ease: "circInOut",  // Płynne przejście
        },
        duration:0.3,
        ease:"easeOut"
    }}
    onClick={() => {
        const Main = document.getElementById(ScrollTo);
        if (Main) {
            window.scrollTo({
                top: Main.offsetTop,
                behavior: "smooth",
            });
        }
    }}
>
    <ArrowDown size={80} />
</motion.div>




                </div>
            </div>
           
        </>
    )
}