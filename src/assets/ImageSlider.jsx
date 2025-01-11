import { motion } from "framer-motion"
import { useState } from "react"

export default function ImageSlider({DisplayedImages,Size}) {

    
    const ImageSliderContainer = {
        width: (!Size? "400px" : Size),
        backgroundColor:"#0d0d0d",
        borderRadius:"20px",
        display: "flex",
        flexDirection: "column",
        padding:"20px",
        gap:"20px",
        alignItems: "center",
    }

    const MainImageContainer = {
        width: "100%",
        height: (!Size? "220px" : Size/1.8),
        overflow: "hidden",
        boxShadow:"0px 0px 0px 1px grey",
        position: "relative",
    }

    const RestImagesContainer = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow:"hidden",
        gap: "6.8%",
        padding:"5px 3px",
        scrollbarWidth:"none"
    }

    const MainImage = {
        width: "100%",
        minheight:"100%",
    }

    const RestImage = {
        width: "100%",
        height: (!Size? "50px" : Size/8),
        scale:"1",
        boxShadow:"0px 0px 0px 1px grey",
        transition:"0.25s ease",
        backgroundColor:"gray"
    }

    const RestImageLast = {
        width: "100%",
        scale:"1",
        height: (!Size? "50px" : Size/8),
        filter:"saturate(0.1)",
        boxShadow:"0px 0px 0px 1px gray",
        transition:"0.25s ease"


    }
    
    const RestImageLastActive={
        width: "100%",
        scale:"0.5",
        height:  (!Size? "50px" : Size/8),
        boxShadow:"0px 0px 0px 2px white",
        backgroundColor:"gray"
    }


    const RestImageActive={
        width: "100%",
        scale:"0.5",
        height:  (!Size? "50px" : Size/8),
        boxShadow:"0px 0px 0px 2px gray",
        backgroundColor:"gray"
    }

    
    const HeadingStyle = {
        zIndex: "5",
        top:"0",
        left:"2%",
        position: "absolute", 
        color: "White",  
        fontWeight:"100",     
        fontSize: "1rem",     
    }


    const Images = (!DisplayedImages)?[
        "/ComponentTest/Render1.png",
        "/ComponentTest/Render2.png",
        "/ComponentTest/Render3.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render4.png",
        ] : DisplayedImages

    const [CurrentImage, setCurrentImage] = useState(0)

    function handleClick(ImageNumber)
    {
        if(ImageNumber>=0 && ImageNumber < Images.length)
        {
            setCurrentImage(ImageNumber)

        }
    }

    return (
        <>
        
            <div style={ImageSliderContainer}>
           
                <div style={MainImageContainer}>
                    <div style={{position:"absolute",width:"100%", zIndex:2,height:"100%", display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <button style={{backgroundColor:"transparent",width:"5px"}} onClick={()=>handleClick(CurrentImage-1)}>{"<"}</button>
                    <button style={{ backgroundColor:"transparent",padding:"0px 4px"}} onClick={()=>handleClick(CurrentImage+1)}>{">"}</button>
                    </div>
                    <motion.img 
                    whileInView={{scale:1,}}
                    initial={{scale:1.5,}}
                    transition={{duration:0.3 , ease:"circInOut"}}
                    key={CurrentImage}
                    src={Images[CurrentImage]} style={MainImage} alt="Main" />
                    <h1 style={HeadingStyle}>{CurrentImage+1} / {Images.length}</h1> {/* Ustawiamy h1 wewnątrz kontenera z obrazkiem */}
                
                </div>
                <div style={RestImagesContainer}>
    {Images.map((image, index) => {
        return (
            (index < 4 && 
                <>
                <div  style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(./Selected.png)",backgroundSize:"100% 100%",transition:"2s ease"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <motion.img 
                onClick={() => handleClick(index)} 
                key={index} 
                src={image} 
                style={index!=3 ? RestImage : RestImageLast}
                animate={index!=3?(CurrentImage === index ? RestImageActive : RestImage):(CurrentImage >= index ? RestImageLastActive : RestImageLast)}
                alt={`Rest Image ${index + 1}`} 
                 />             
                 {index == 3 && <span style={{position:"absolute",userSelect:"none",pointerEvents:"none"}}>{Images.length-4}+</span>}
                </div>
                </div>
            </> 
            )
            

           
        );
    })}
</div>

            </div>



        </>
    )
}
