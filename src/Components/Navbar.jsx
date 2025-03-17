import './Navbar.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(0)
  const [Animkey, setAnimkey] = useState(0)

  const NavbarList = [
    "Main",
    "Web Development",
    "3D Meshes",
    "Contact",
  ]

  const containerVariants = {
    closed: { 
      height: "100%",
      clipPath: "inset(0% 0% 100% 0%)",
      backgroundColor: "rgb(0, 0, 0)", 
    },
    open: { 
      height: "100%",
      clipPath: "inset(0px 0px 0% 0px)",
      backgroundColor: "rgb(0, 0, 0)", 

    }
  }

  const listItemVariants = {
    hidden: { 
      skewX: "20deg", 
      opacity: 0, 
      scaleY: 0.2,
      y: 150,
      filter: "blur(4px)" 
    },
    Close: { 
      skewX: "20deg", 
      opacity: 0, 
      scaleY: 0.2,
      y: -100,
      filter: "blur(4px)" 
    },
    Open: { 
      skewX: "0deg", 
      opacity: 1, 
      scaleY: 1,
      y: 0, 
      filter: "blur(0px)" 
    },
  }

  const hrVariants = {
    Close: { width: "100%", opacity: 0},
    Open: { width: "100%", opacity: 0.4},
  }

  useEffect(()=>{
    if(navOpen == 1) {
      if(Animkey != 1) {
        setAnimkey(prev=>(prev+1))
      } else {
        setAnimkey(prev=>(prev-1))
      }
    }
  },[navOpen])


  return (
    <>
     <div className='NavbarMain'>
          <h1>nerii.com</h1>
          <button onClick={()=>{setNavOpen(prev=>(prev== 1 ? 0:1))}}>Menu</button>
        </div>

        <div className="NavbarContainerFix">
        <motion.div className='NavbarContainer'
      variants={containerVariants}
      initial={"closed"}
      animate={navOpen == 1 ? "open" : "closed"}
      transition={{duration:0.4, ease:"circInOut", delay: !navOpen && 0.1}}
      > 
        
        <div className='NavbarContent'>
            <div className='NavbarContentList'>
              {NavbarList.map((entry,index)=>{
                return(
                  <>
                    <motion.div className='NavbarListItem'
                    variants={listItemVariants}
                    key={Animkey}
                    initial={"hidden"}
                    animate={navOpen ? "Open": "Close"}
                    transition={{duration:0.6, ease:"circInOut", delay: navOpen ? (0.05* index) : (0.05 * index)}}
                    >
                        <h3 className='NavbarListItemText'>{entry}</h3>

                        <motion.hr
                        style={{position:"absolute",width:"100%"}}
                        variants={hrVariants}
                        key={Animkey}
                        initial={"hidden"}
                        animate={navOpen ? "Open" : "Close"}
                        transition={{duration:0.5, ease:"circInOut"}}
                        ></motion.hr>
                    </motion.div>
                  </>
                )
              })}
            </div>
          
          </div>
        </motion.div>
        </div>
       

    </>
   
  )
}
