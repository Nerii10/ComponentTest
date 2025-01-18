import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import "./Navbar.css"


export default function Navbar(){

const MotionVariant = (delay) => ({
        hidden: {
            opacity: 0,
            y: 50,
            scaleY:0.2,
            skewX: -10,
            filter: "blur(3px)",
            transition: {
                delay: delay, 
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            skewX: 0,
            scaleY:1,
            transition: {
                delay: delay,
                duration: 0.5,
                ease: "easeInOut",
            },
        },
});

const MotionVariant2 = (delay) => ({
    hidden: {
        opacity: 0,
        scale:0.95,
        transition: {
            delay: delay,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    show: {
        opacity: 1,
        scale:1,
        transition: {
            delay: delay,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
});

const MotionVariant3 = (delay) => ({
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            delay: delay, 
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    show: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
});

const Programs = [
    "ee",
    "ee",
    "ee",
    "ee",
    "ee",
    "ee","ee",
    "ee",
    "ee",
    "ee",
    "ee",
    "ee","ee",
    "ee",
    "ee",
    "ee",
    "ee",
    "ee","ee",
    "ee",
    "ee",
    "ee",
    "ee",
    "ee","ee",
    "ee",
    "ee",
    "ee",
    "ee",
    "ee",
]

const Media = 
[
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png", 
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png", 
    "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" , 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png"
]

const [animate, setAnimate] = useState(false);

const handleClick = () => {
    setAnimate(!animate); 
};

useEffect(() =>{
    (animate? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto")
}, [animate]);

  return (
    <> 
        <div style={{height:"75px"}}></div>
        <motion.div 
        animate={animate ? { height: "100%", opacity: 1 } : { height: "50px", opacity: 1 }}
        transition={{ duration: 1,   ease: animate ? "circInOut" : "circInOut",}}
        className='Navbar'
        >
        
        <div style={{width:"90%"}}>
                    <motion.button onClick={handleClick}
                    className='NavbarButton' 
                    whileTap={{scale: 1.3, rotate: -1}} 
                    transition={{duration: 0.15, ease: "easeInOut"}} 
                    >   
                        {animate ? 'Close' : 'Open'}
                    </motion.button>      
       
                    <br></br><br></br><br></br>
                
                    <div 
                    className="NavbarContainer">
                        <motion.div
                        variants={MotionVariant((animate ? 0 : 0.4))} 
                        initial="hidden" 
                        animate={animate ? "show" : "hidden" }
                        viewport={{once:false}}
                        >
                            <h2>Home</h2>
                        </motion.div>

                        <motion.div
                        variants={MotionVariant((animate ? 0.1 : 0.3))} 
                        initial="hidden" 
                        animate={animate ? "show" : "hidden" }
                        viewport={{once:false}}
                        >
                            <hr></hr>
                            <h2>Unreal Engine</h2>
                        </motion.div>

                        <motion.div
                        variants={MotionVariant((animate ? 0.2 : 0.2))} 
                        initial="hidden" 
                        animate={animate ? "show" : "hidden" }
                        viewport={{once:false}}
                        >
                            <hr></hr>
                            <h2>Web Development</h2>
                        </motion.div>

                        <motion.div
                        variants={MotionVariant((animate ? 0.3 : 0.1))} 
                        initial="hidden" 
                        animate={animate ? "show" : "hidden" }
                        viewport={{once:false}}
                        >
                            <hr></hr>
                            <h2>Blender</h2>
                        </motion.div>

                        <motion.div
                        variants={MotionVariant((animate ? 0.4 : 0))} 
                        initial="hidden" 
                        animate={animate ? "show" : "hidden" }
                        viewport={{once:false}}
                        >
                            <hr></hr>
                            <h2>Contact</h2>
                            
                        </motion.div>
                        <br></br>

                        <motion.div 
                        className='NavbarProgramsContainer'
                        variants={MotionVariant3(0.25)} 
                        initial="hidden" 
                        animate={animate ? "show" : "hidden" }
                        viewport={{once:false}}
                        >
                                {Programs.map((program,index)=>{
                                    return(
                                        <motion.img 
                                        variants={MotionVariant2((animate ? 0.5 : 0 ))} 
                                        initial="hidden" 
                                        animate={animate ? "show" : "hidden" }
                                        viewport={{once:false}}
                                        src="program.png" style={{width:"100px",  padding:"20px",borderRadius:"20px"}}></motion.img>
                                    )
                                })}
                        </motion.div>
                        
                        <div className='NavbarMedia'
                        style={{
                            height: animate ? "40px" : "0px",
                            transitionDelay: animate ? "0.9s" : "0s" ,
                            }}>
                        {Media.map((media,index) => {return (
                            <motion.img
                            variants={MotionVariant((animate ? 0.5 + (0.1*(index+1)) :  0))} 
                            initial="hidden" 
                            key={index}
                            animate={animate ? "show" : "hidden" }
                            viewport={{once:false}}
                            src={media}
                            className='NavbarMediaIcon'
                            >
                                
                            </motion.img>
                        )})}
                        </div>
                </div>
                    </div>

                 
        </motion.div>
    </>
  );
};