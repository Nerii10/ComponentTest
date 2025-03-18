import './Navbar.css'
import { Link } from 'react-router-dom' // Upewnij się, że importujesz z 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ hide, hideY }) {
  const [navOpen, setNavOpen] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [showNavbar, setShowNavbar] = useState(0)
  
  const NavbarList = [
    { name: "Main", link: "" },
    { name: "Web Development", link: "webdevelopment" },
    { name: "Unreal Engine", link: "unrealengine" },
    { name: "3D Meshes", link: "blender" },
    { name: "Contact", link: "contact" },
  ]

  const containerVariants = {
    closed: { 
      clipPath: "inset(0% 0% 100% 0%)",
      background: "linear-gradient(315deg, rgb(0, 0, 0), rgb(0, 0, 0))",
    },
    open: { 
      clipPath: "inset(0px 0px 0% 0px)",
      background: "linear-gradient(315deg, rgb(28, 20, 33), rgb(0, 0, 0))",
    }
  }

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 120,
    },
    Close: { 
      opacity: 0, 
      y: -120,
    },
    Open: { 
      opacity: 1, 
      y: 0, 
    },
  }

  useEffect(() => {
    if (navOpen === 1) {
      setAnimKey(prev => (prev === 1 ? 0 : 1))
    }
  }, [navOpen])

  useEffect(() => {
    if (hide) {
      const handleScroll = () => {
        if (window.scrollY >= hideY) {
          setShowNavbar(1)
        } else {
          setShowNavbar(0)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    } else {
      setShowNavbar(1)
    }
  }, [hide, hideY])

  return (
    <>
      <motion.div className='NavbarMain'
        initial={{ y: -100 }}
        animate={showNavbar ? { y: 0 } : { y: -100 }}
        transition={{ type: "spring", damping: 23 }}
      >
        <h1>nerii.com</h1>
        <motion.button
          onClick={() => setNavOpen(prev => (prev === 1 ? 0 : 1))}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {navOpen ? "close" : "open"}
        </motion.button>
      </motion.div>

      <div className="NavbarContainerFix">
        <motion.div className='NavbarContainer'
          variants={containerVariants}
          initial="closed"
          animate={navOpen === 1 ? "open" : "closed"}
          transition={{ duration: 0.6, ease: "circInOut", delay: !navOpen && 0.1 }}
        > 
          <div className='NavbarContent'>
            <div className='NavbarContentList'>
              {NavbarList.map((entry, index) => (
                <motion.div 
                  className='NavbarListItem'
                  variants={listItemVariants}
                  key={`${index}-${animKey}`}  // Używamy kombinacji indeksu i animKey
                  initial="hidden"
                  animate={navOpen ? "Open" : "Close"}
                  transition={{
                    duration: 0.6,
                    ease: "circInOut",
                    type: "spring",
                    damping: 25,
                    delay: navOpen ? (0.07 * index) : (0.03 * index)
                  }}
                >   
                  <Link 
                    to={`/${entry.link}`} 
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => setNavOpen(0)} // Zamykamy navbar przy kliknięciu
                  >
                    <h3 className='NavbarListItemText'>{entry.name}</h3>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.p 
              style={{ color: "gray", position: "absolute", bottom: navOpen ? "0px" : "-200px" }}
              transition={{ duration: 0.4, ease: "circInOut", delay: navOpen ? 0.4 : 0, type: "spring", damping: 23 }}
            >
              website under construction
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  )
}
