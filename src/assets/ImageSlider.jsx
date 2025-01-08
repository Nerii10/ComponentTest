import { motion } from "framer-motion"
import { useState } from "react"

export default function ImageSlider() {

 
    const ImageSliderContainer = {
        width: "400px",
        height: "320px",
        backgroundColor:"#0d0d0d",
        padding: "20px",
        display: "flex",
        position:"relative",
        flexDirection: "column",
        alignItems: "center",
        gap:"20px"
    }

    const MainImageContainer = {
        width: "400px",
        height: "300px",
        overflow: "hidden",
        color: "red",
        boxShadow:"0px 0px 0px 1px grey",
        position: "relative",
    }

    const RestImagesContainer = {
        width: "390px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        overflowX:"auto",
        overflowY:"hidden",
        gap: "30px",
        padding:"20px 20px",
        scrollbarWidth:"none"
    }

    const MainImage = {
        height:"100%",
        width: "100%",
    }

    const RestImage = {
        width: "100px",
        height:"50px",
        boxShadow:"0px 0px 0px 1px white",
    }
    
    const RestImageActive={
        width: "100px",
        height:"50px",
        boxShadow:"0px 0px 0px 1px gray",
        scale:0.75,
        padding:"10px",
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


    const Images =[
        "/ComponentTest/Render1.png",
        "/ComponentTest/Render2.png",
        "/ComponentTest/Render3.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render4.png",
        ]

    const [CurrentImage, setCurrentImage] = useState(0)

    function handleClick(ImageNumber)
    {
        if(ImageNumber>0 && ImageNumber < Images.length)
        {
            setCurrentImage(ImageNumber)

        }
    }

    return (
        <>
        
            <div style={ImageSliderContainer}>
                        <div style={{width:"90%",top:"-30px",left:"0",zIndex:"2",height:"0px",}}>
                        <button style={{float:"left",height:"40px",marginTop:"200px"}} onClick={()=> handleClick(CurrentImage-1)}>Left</button>
                        <button style={{float:"Right",height:"40px",marginTop:"200px"}} onClick={()=> handleClick(CurrentImage+1)}>Right</button>
                        </div>
                <div style={MainImageContainer}>
                    <motion.img 
                    whileInView={{scale:1,opacity:1,rotate:0}}
                    initial={{scale:1.4,opacity:0.2,rotate:5}}
                    transition={{duration:0.3 , ease:"circOut"}}
                    key={CurrentImage}
                    src={Images[CurrentImage]} style={MainImage} alt="Main" />
                    <h1 style={HeadingStyle}>{CurrentImage+1} / {Images.length}</h1> {/* Ustawiamy h1 wewnątrz kontenera z obrazkiem */}
                </div>
                <div style={RestImagesContainer}>
    {Images.map((image, index) => {
        return (
            <motion.img 
                whileHover={{ scale: 0.9 }} 
                onClick={() => handleClick(index)} 
                key={index} 
                src={image} 
                style={RestImage}
                transition={{duration:"0.25", ease:"circInOut"}}
                animate={CurrentImage === index ? RestImageActive : RestImage}
                alt={`Rest Image ${index + 1}`} 
            />
        );
    })}
</div>

            </div>
        </>
    )
}
