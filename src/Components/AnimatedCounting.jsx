import { useEffect, useState } from "react";

export default function AnimatedCounting({Number, Speed}) {
  const Goal = Number;
  const [CurrentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalTime = Speed;
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
  }, [CurrentNumber]); 

  return (
    <>
      <span style={{margin:0,width:"fit-content"}}>{" "}{CurrentNumber}</span>
    </>
  );
}
