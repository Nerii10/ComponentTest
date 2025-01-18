import { tr } from "framer-motion/client";
import "./Footer.css"
import { motion } from "framer-motion"

export default function Footer()
{
    const Resources = [{name:"Unreal Engine" , link:"Unreal"},{name:"Web Development" , link:"Web"},{name:"Blender" , link:"Blender"}]
   
    return(
        <>
            <motion.div className="Footer"
             id="Footer"
             style={{overflow:"hidden"}}
             viewport={{amount:0}}
             transition={{duration:0.5, ease:"circInOut",type:"spring"}}
            >
                <div className="FooterSection">
                    <motion.h2
                    initial={{ opacity:1,width:"0%"}}
                    whileInView={{ opacity:1,width:"fit-content"}}
                    style={{overflow:"hidden"}}
                    transition={{duration:1, ease:"circInOut",type:"spring"}}
                    viewport={{once:true}}
                    >Resources</motion.h2>



                    <div style={{display:"flex",justifyContent:"center",gap:"5px", flexDirection:"column"}}>
                        {Resources.map((Element,index)=>{
                           return (
                            <motion.a
                                initial={{x:"-50px", opacity:0,rotate:5}}
                                whileInView={{x:"0px", opacity:1,rotate:0}}
                                key={index}
                                viewport={{once:true}}
                                whileHover={{scale:1.2}}
                                transition={{duration:0.25, ease:"circInOut", delay: (index+1)*0.1,type:"spring"}}
                                href={Element.link}
                            >
                                {Element.name}
                            </motion.a>
                        );
                        })}
                    </div>
                </div>

                <div  className="FooterSection">
                <motion.h2
                    initial={{ opacity:1,width:"0%"}}
                    whileInView={{ opacity:1,width:"fit-content"}}
                    style={{overflow:"hidden",textWrap:"nowrap"}}
                    transition={{duration:1, ease:"circInOut",type:"spring",delay:0.3}}
                    viewport={{once:true}}
                    >Designed by mikolaj</motion.h2>
                    <motion.p
                    initial={{ opacity:0,x:-50}}
                    whileInView={{ opacity:1,x:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5, ease:"circInOut",type:"spring",delay:0.4}}
                    >
                    This website was crafted with care using react to ensure a seamless and engaging experience for all visitors. Inspired by simplicity and usability, this website is a reflection of my passion for clean and effective design.
                    </motion.p>
                </div>

                <div  className="FooterSection">
                <motion.h2
                    initial={{ opacity:1,width:"0%"}}
                    whileInView={{ opacity:1,width:"fit-content"}}
                    style={{overflow:"hidden",textWrap:"nowrap"}}
                    viewport={{once:true}}
                    transition={{duration:1, ease:"circInOut",type:"spring",delay:0.6}}
                    >All Rights reserved {new Date().getFullYear()} </motion.h2>
                    <motion.p
                    initial={{ opacity:0,x:-50}}
                    whileInView={{ opacity:1,x:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5, ease:"circInOut",type:"spring",delay:0.7}}
                    >This website and its contents are protected by copyright laws.</motion.p>
                </div>
            </motion.div>
        </>
    )
}