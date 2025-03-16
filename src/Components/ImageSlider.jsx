import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import "./ImageSlider.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider() {
  const images = [
    "/Render1.png",
    "/Render2.png",
    "/Render4.png",
    "/Render1.png",
    "/Render6.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideTo = useCallback((newSlide) => {
    if (newSlide < 0) newSlide = 0;
    if (newSlide > images.length - 1) newSlide = images.length - 1;
    setCurrentSlide(newSlide);
  }, [images.length]);

  // Zmiana slajdu o delta (1 lub -1)
  const handleSlideChange = (delta) => {
    if(currentSlide == 0 && delta == -1) {
        setCurrentSlide(images.length-1)
    } else if (currentSlide == images.length-1){
        setCurrentSlide(0)
    } else {
        slideTo(currentSlide + delta);
    }
  };

  // Obsługa zakończenia przeciągania
  const handleDragEnd = (event, info) => {
    const threshold = 20;
    if (info.offset.x < -threshold) {
      handleSlideChange(1);
    } else if (info.offset.x > threshold) {
      handleSlideChange(-1);
    } else if (info.offset.x < threshold) {
        setCurrentSlide(currentSlide + 0.0001)
        setTimeout(()=>{
            setCurrentSlide(currentSlide)
        }, 10)
    }
  };

  return (
    <div className="ImageSliderContainer">
      <motion.div
        drag="x"
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="Images"
        animate={{ x: currentSlide * -100 + "%" }}
        transition={{ duration: 0.5, type: "spring", damping: 15 }}
      >
        {images.map((image, index) => (
          <div key={index} className="ImageContainer">
            <div className="Image">
              <img src={`/ComponentTest/${image}`} alt={`Slide ${index}`} />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="Controllers">
        <button onClick={() => handleSlideChange(-1)}>
          <ChevronLeft />
        </button>
        <button onClick={() => handleSlideChange(1)}>
          <ChevronRight />
        </button>
      </div>
      <div className="PreviewContainer">
        {images.slice(0, 4).map((image, index) => {
          if (index < 3) {
            return (
              <div key={index} className="PreviewImageContainer">
                <motion.img
                  src={`/ComponentTest/${image}`}
                  onClick={() => slideTo(index)}
                  className={currentSlide === index ? "ActiveImage" : "Image"}
                  alt={`Preview ${index}`}
                />
              </div>
            );
          } else {
            return (
              <div key={index} className="PreviewImageContainer">
                <motion.img
                  src={`/ComponentTest/${image}`}
                  onClick={() => slideTo(index)}
                  className={
                    currentSlide >=3 ? "ActiveLastImage" : "LastImage"
                  }
                  alt={`Preview ${index}`}
                />
                {images.length > 4 && (
                  <p style={{ pointerEvents: "none" }}>
                    +{images.length - 4}
                  </p>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
