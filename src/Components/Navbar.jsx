import './Navbar.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const NavbarList = [
    "Main",
    "UnrealEngine",
    "Web Development",
    "Blender",
    "Unity",
  ]

  // Warianty dla kontenera nawigacji
  const containerVariants = {
    closed: { 
      height: "60px", 
      backgroundColor: "rgb(17, 17, 17)", 
      borderBottom: "rgba(255, 255, 255, 0.3) 1px solid" 
    },
    open: { 
      height: "100%", 
      padding: "40px 0px",
      display:"flex",
      backgroundColor: "rgb(17, 17, 17)", 
      borderBottom: "rgba(255, 255, 255, 0) 1px solid" 
    }
  }

  // Warianty dla pozycji listy
  const listItemVariants = {
    hidden: { 
      skewX: "20deg", 
      opacity: 0, 
      scaleY: 0.2, 
      y: 50, 
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

  // Warianty dla animacji linii pod elementami listy
  const hrVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: { width: "100%", opacity: 1 }
  }

  const toggleNav = () => {
    setNavOpen(prev => !prev)
  }

  return (
    <motion.div 
      className="NavbarContainer"
      initial="closed"
      animate={navOpen ? "open" : "closed"}
      variants={containerVariants}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div 
        style={{ 
          width: "80%", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          height: "60px", 
          flexShrink: "0" 
        }}
      >
        <h1 style={{ padding: 0, margin: 0, fontSize: "20px" }}>nerii.com</h1>
        <motion.button 
          onClick={toggleNav} 
          className="NavbarButton"
          whileTap={{ scale: 0.9 }}
        >
          OPEN
        </motion.button>
      </div>

      <div style={{ display: 'flex', width: '80%', flexDirection: "column", marginTop: "10px", maxWidth:"500px",  }}>
        {NavbarList.map((item, index) => (
          <motion.div
            key={item}
            variants={listItemVariants}
            initial="hidden"
            animate={navOpen ? "visible" : "hidden"}
            transition={{ 
              duration: 0.5, 
              ease: "circInOut", 
              delay: navOpen ? index * 0.1 : (NavbarList.length - index) * 0.1, 
              type: "tween" 
            }}
            style={{ 
              display: 'flex', 
              justifyContent: "center", 
              flexDirection: "column", 
              alignItems: "baseline", 
              position: 'relative' 
            }}
          >
            <p className="NavbarListItem">{item}</p>
            <motion.hr
              style={{ position: "absolute", marginTop: "50px" }}
              variants={hrVariants}
              initial="hidden"
              animate={navOpen ? "visible" : "hidden"}
              transition={{ 
                duration: 0.5, 
                delay: navOpen ? index * 0.1 : (NavbarList.length - index) * 0.1 
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
