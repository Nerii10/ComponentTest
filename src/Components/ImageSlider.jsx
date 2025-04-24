import { useState } from "react"
import { motion } from "framer-motion"
import "./ImageSlider.css"
import { tr } from "framer-motion/client";
import { ChevronLeft, ChevronRight, Images, Scale } from "lucide-react";

export default function ImageSlider({Images}){

    let images = []

    if(Images) {
         images = Images
    } else {
         images = ["/Render1.png","/Render2.png", "/Render4.png", "/Render1.png", "/Render6.png",]
    }

    const [CurrentSlide, setCurrentSlide] = useState(0)
    
    function SlideChange(x){
        if(CurrentSlide <= 0 && x == -1) {
            setCurrentSlide(CurrentSlide-0.2)
            setTimeout(()=>{setCurrentSlide(CurrentSlide)},100)
            return;
        };
        if(CurrentSlide >= images.length-1 && x == 1)  {
            setCurrentSlide(CurrentSlide+0.2)
            setTimeout(()=>{setCurrentSlide(CurrentSlide)},100)
            return;
        };

        setCurrentSlide(prev => (prev+x))
    }

    function HandleDragSlideChange(event,info){
        const Treshold = 20;
        const DragTransform = info.offset.x

        if(DragTransform < (-1*Treshold)){
            SlideChange(1)
        } else if (DragTransform > (Treshold)) {
            SlideChange(-1)
        } else if (DragTransform < Treshold) {
            setCurrentSlide(CurrentSlide-0.00001)
            setTimeout(()=>{setCurrentSlide(CurrentSlide)},100)
            return;
        }
    }

    return(
        <>
            <div className="ImageSliderContainer">
                <motion.div 
                drag="x"
                dragElastic={0.1}
                onDragEnd={(event,info)=>HandleDragSlideChange(event,info)}
                className="Images" 
                animate={{x: (CurrentSlide*-100 +"%")}}
                transition={{duration:0.1, type:"spring", damping:"15"}}
                >
                    {images.map((image,index)=>{
                        return( 
                            <div className="ImageContainer">
                                <div className="Image">
                                    <img src={`${image}`}></img>
                                </div>
                            </div>
                        )
                    })}
                 
                </motion.div>
                <div className="Controllers">
                    <button onClick={()=>{SlideChange(-1)}}><ChevronLeft></ChevronLeft></button>
                    <button onClick={()=>{SlideChange(1)}}><ChevronRight></ChevronRight></button>
                </div>
                <div className="PreviewContainer">
                    {images.map((image,index)=>{
                        if(index <= 3)
                        {
                            return(
                                <div className="PreviewImageContainer">
                                    {index != 3 ? <motion.img src={`${image}`} 
                                    onClick={()=>{setCurrentSlide(index)}} 
                                    className={CurrentSlide == index || index == 3 && CurrentSlide >=3? "ActiveImage": "Image"}
                                    ></motion.img>:
                                    
                                    <><motion.img src={`${image}`} 
                                    onClick={()=>{setCurrentSlide(index)}} 
                                    className={CurrentSlide == index || index == 3 && CurrentSlide >=3? "ActiveLastImage": "LastImage"}
                                    ></motion.img>
                                    <p style={{pointerEvents:"none"}}>+{images.length- 4}</p> </>
                                    }
                                </div>
                            )
                        }
                    })}
                </div>
                    
               
            </div>
        </>
    )
}


                    