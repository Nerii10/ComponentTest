import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ImageSlider({ DisplayedImages, Size }) {
    
    const ImageSliderContainer = {
        width: (!Size ? "400px" : Size),
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "20px",
        alignItems: "center",
    };
    
    const MainImageContainer = {
        width: "100%",
        height: (!Size ? "220px" : Size / 1.8),
        overflow: "hidden",
        boxShadow: "0px 0px 0px 1px grey",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        transition:"1s ease"
    };

    const RestImagesContainer = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        gap: "6.8%",
        padding: "5px 3px",
        scrollbarWidth: "none"
    };

    const MainImage = {
        width: "100%",
        aspectRatio: "1 / 0.6"
    };

    const PlaceholderImage = {
        width: "100%",
        opacity: 0,
        position: "absolute",
        zIndex: -1,
    };

    const RestImage = {
        width: "100%",
        aspectRatio:" 1 / 0.6",
        scale: "1",
        boxShadow: "0px 0px 0px 1px grey",
        transition: "0.25s ease",
        backgroundColor: "gray",
        cursor: "pointer"
    };

    const RestImageLast = {
        width: "100%",
        aspectRatio:" 1 / 0.6",
        scale: "1",
        filter: "saturate(0.1)",
        boxShadow: "0px 0px 0px 1px gray",
        transition: "0.25s ease",
        backgroundColor: "gray",
        cursor: "pointer"
    };
    
    const RestImageLastActive = {
        width: "100%",
        scale: "0.65",
        height: (!Size ? "50px" : Size / 8),
        boxShadow: "0px 0px 0px 0px gray",
        backgroundColor: "gray"
    };

    const RestImageActive = {
        width: "100%",
        scale: "0.65",
        height: (!Size ? "50px" : Size / 8),
        boxShadow: "0px 0px 0px 0px gray",
        borderColor: "white",
        backgroundColor: "gray"
    };

    const HeadingStyle = {
        zIndex: "5",
        top: "0",
        left: "2%",
        position: "absolute", 
        color: "White",  
        fontWeight: "100",     
        fontSize: "1rem",     
    };

    const Images = (!DisplayedImages) ? [
        "/ComponentTest/Render1.png",
        "/ComponentTest/Render2.png",
        "/ComponentTest/Render4.png",
        "/ComponentTest/Render5.png",
        "/ComponentTest/Render6.png",
        "/ComponentTest/Render5.png",
        "/ComponentTest/Render1.png",
    ] : DisplayedImages;

    const [CurrentImage, setCurrentImage] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);


    function handleClick(ImageNumber) {
        if (ImageNumber >= 0 && ImageNumber < Images.length) {
            setCurrentImage(ImageNumber);
        }
    }

    return (
        <>
            <div style={ImageSliderContainer}>
                <div style={{ position: "absolute", width: "100%", opacity: 0, display: "none" }}>
                    {Images.map((image, index) => (
                        <img 
                            key={index}
                            className="preload-image"
                            src={image}
                            alt={`Preloaded ${index}`} 
                        />
                    ))}
                </div>

                <div style={MainImageContainer}>
                   
                    <div style={{ position: "absolute", width: "100%", zIndex: 2, height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <button style={{ backgroundColor: "transparent",height:"100%",width:"50px"}} onClick={() => handleClick(CurrentImage - 1)}>{"<"}</button>
                        <button style={{ backgroundColor: "transparent", padding: "0px 4px",height:"100%",width:"50px"}} onClick={() => handleClick(CurrentImage + 1)}>{">"}</button>
                    </div>
                        <motion.img
                            whileInView={{ scale: 1, filter: "blur(0px)" }}
                            initial={{ scale: 1.25, filter: "blur(2px)" }}
                            transition={{ duration: 0.5, ease: "circInOut" }}
                            key={CurrentImage}
                            src={Images[CurrentImage]} 
                            style={MainImage} 
                            alt="Main" 
                        />
                    <h1 style={HeadingStyle}>{CurrentImage + 1} / {Images.length}</h1>
                </div>
                <div style={RestImagesContainer}>
                    {Images.map((image, index) => {
                        return (
                            (index < 4 && 
                                <>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "url(./Selected.png)", backgroundSize: "100% 100%", transition: "2s ease" }}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <motion.img 
                                                onClick={() => handleClick(index)} 
                                                key={index} 
                                                src={image} 
                                                style={index !== 3 ? RestImage : RestImageLast}
                                                animate={index !== 3 ? (CurrentImage === index ? RestImageActive : RestImage) : (CurrentImage >= index ? RestImageLastActive : RestImageLast)}
                                                alt={`Rest Image ${index + 1}`} 
                                            />             
                                            {index === 3 && <span style={{ position: "absolute", userSelect: "none", pointerEvents: "none" }}>{Images.length > 4 && (Images.length - 4 + "+")}</span>}
                                        </div>
                                    </div>
                                </> 
                            )
                        );
                    })}
                </div>
            </div>
        </>
    );
}
