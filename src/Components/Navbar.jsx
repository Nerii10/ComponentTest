import './Navbar.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(0)

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
      backgroundColor: "rgb(29, 29, 29)", 
    },
    open: { 
      height: "100%",
      clipPath: "inset(0px 0px 0% 0px)",
      backgroundColor: "rgb(21, 21, 21)", 
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
    hidden2: { 
      skewX: "20deg", 
      opacity: 0, 
      scaleY: 0.2,
      y: -100,
      filter: "blur(4px)" 
    },
    visible: { 
      skewX: "0deg", 
      opacity: 1, 
      scaleY: 1,
      y: 0, 
      filter: "blur(0px)" 
    },
  }

  const hrVariants = {
    hidden: { width: "100%", opacity: 0.1 },
    visible: { width: "100%", opacity: 0.4 },
  }

  useEffect(()=>{
    console.log(navOpen)
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
                    key={navOpen}
                    initial={navOpen ? "hidden" : "visible"}
                    animate={navOpen ? "visible": "hidden2"}
                    transition={{duration:0.6, ease:"circInOut", delay: navOpen ? (0.05* index) : (0.05 * index)}}
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
        </div>
       

    </>
   
  )
}
