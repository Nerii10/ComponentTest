import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCounting({Number, Speed}) {
  const Goal = Number;
  const [CurrentNumber, setCurrentNumber] = useState(0);
  const [Animate, setAnimate] = useState(0)

  useEffect(() => {
    const intervalTime = Speed;

    if(Animate){
      const timeline = setInterval(() => {
        setCurrentNumber((prev) => {
          if (prev >= Goal) {
            clearInterval(timeline);
            return Goal;
          }
          console.log(intervalTime)
          return prev + 1;
        });
      }, intervalTime);
  
      return () => clearInterval(timeline);
    }
  }, [Animate]); 

  return (
    <>
      <motion.span
       style={{margin:0,width:"fit-content"}}
       whileInView={()=>{setAnimate(1)}}
       viewport={{amount:1}}
       >{" "}{CurrentNumber}</motion.span>
    </>
  );
}
