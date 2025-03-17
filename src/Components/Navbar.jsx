import './Navbar.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(0)
  const [Animkey, setAnimkey] = useState(0)
  const [showNavbar, setshowNavbar] = useState(0)
  
  const NavbarList = [
    "Main",
    "Web Development",
    "Unreal Engine",
    "3D Meshes",
    "Contact",
  ]

  const containerVariants = {
    closed: { 
      height: "100%",
      clipPath: "inset(0% 0% 100% 0%)",
      background: "linear-gradient(315deg, rgb(0, 0, 0),rgb(0, 0, 0))",
    },
    open: { 
      height: "100%",
      clipPath: "inset(0px 0px 0% 0px)",
      background: "linear-gradient(315deg, rgb(28, 20, 33),rgb(0, 0, 0))",
    }
  }

  const listItemVariants = {
    hidden: { 
      opacity: -1, 
      y: 120,
    },
    Close: { 
      opacity: -1, 
      y: -120,
    },
    Open: { 
      opacity: 1, 
      y: 0, 
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

  useEffect(()=>{
    addEventListener("scroll", ()=>{
      if(window.scrollY > window.innerHeight + 100)
      {
        setshowNavbar(1)
      } else {
        setshowNavbar(0)
        
      }
    })
  },[])

  return (
    <>
     <motion.div className='NavbarMain'
     initial={{y:-100}}
     animate={showNavbar ? {y:0} : {y:-100}}
     transition={{type:"spring", damping:23}}
     >
          <h1>nerii.com</h1>
          <motion.button onClick={()=>{setNavOpen(prev=>(prev== 1 ? 0:1))}}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            
          >{navOpen ? "close" : "open" }</motion.button>
        </motion.div>

        <div className="NavbarContainerFix">
        <motion.div className='NavbarContainer'
      variants={containerVariants}
      initial={"closed"}
      animate={navOpen == 1 ? "open" : "closed"}
      transition={{duration:0.6, ease:"circInOut", delay: !navOpen && 0.1}}
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
                    transition={{duration:0.6, ease:"circInOut", type:"spring", damping:25 ,delay: navOpen ? (0.07* index) : 0.03 * index}}
                    >
                        <h3 className='NavbarListItemText'>{entry}</h3>
                    </motion.div>
                  </>
                )
              })}

            </div>
            <motion.p style={{color:"gray"}}
            key={Animkey}
            initial={{position:"absolute", bottom:'-200px'}}
            animate={navOpen && {position:"absolute", bottom: "0px"}}
            transition={{duration:0.4, ease:"circInOut", delay: navOpen ? 0.4 : 0, type:"spring", damping:23}}
            >website under construction</motion.p>
          </div>
        </motion.div>
        </div>
       

    </>
   
  )
}
