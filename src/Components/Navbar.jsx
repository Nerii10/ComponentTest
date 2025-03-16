import './Navbar.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(0)
  const [anim,setAnim] = useState(0)
  const NavbarList = [
    "Main",
    "Web Development",
    "3D Meshes",
    "Contact",
  ]

  const containerVariants = {
    closed: { 
      height: "100%",
      clipPath: "polygon(00% 00%, 100% 0%, 100% 10%, 0% 10%)",
      backgroundColor: "rgb(91, 91, 91)", 
    },
    open: { 
      height: "100%",
      clipPath: "polygon(00% 0%, 100% 0%, 100% 100%, 0px 100%)",
      backgroundColor: "rgba(80, 80, 80, 0.78)", 
    }
  }

  const listItemVariants = {
    hidden: { 
      skewX: "20deg", 
      opacity: 0, 
      scaleY: 0.2,
      y: -500,
      filter: "blur(2px)" 
    },
    visible: { 
      skewX: "0deg", 
      opacity: 1, 
      scaleY: 1,
      y: 0, 
      filter: "blur(0px)" 
    }
  }

  const hrVariants = {
    hidden: { width: "100%", opacity: 0.1 },
    visible: { width: "100%", opacity: 0.4 },
  }

  useEffect(()=>{
    console.log(navOpen)
  },[navOpen])

  return (
    <motion.div className='NavbarContainer'
    variants={containerVariants}
    initial={"closed"}
    animate={navOpen == 1 ? "open" : "closed"}
    onAnimationComplete={()=>(setAnim(prev=>(prev == 1 ? 0 : 1)))}
    transition={{duration:1, ease:"circInOut"}}
    > 
        <div className='NavbarMain'>
          <h1>nerii.com</h1>
          <button onClick={()=>{setNavOpen(prev=>(prev== 1 ? 0:1))}}>Menu</button>
        </div>
        <br></br>
        <div className='NavbarContent'>
          <div className='NavbarContentList'>
            {NavbarList.map((entry,index)=>{
              return(
                <>
                  <motion.div className='NavbarListItem'
                  variants={listItemVariants}
                  initial={"hidden"}
                  animate={navOpen ? "visible" :  "hidden" }
                  transition={{duration:0.5, ease:"circInOut", delay: (0.2* index)}}
                  >
                      <h3 className='NavbarListItemText'>{entry}</h3>

                      <motion.hr
                      style={{position:"absolute",width:"100%"}}
                      variants={hrVariants}
                      initial={"hidden"}
                      animate={navOpen == 1 ? "visible" : "hidden"}
                      transition={{duration:0.5, ease:"circInOut", delay: (0.2* index)}}
                      ></motion.hr>
                  </motion.div>
                </>
              )
            })}
          </div>
         
        </div>
    </motion.div>
  )
}
