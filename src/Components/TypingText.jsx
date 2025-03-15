import { motion } from 'framer-motion';
import { useState } from 'react';
import './TypingText.css';

export default function TypingText({ Text, Type }) {
    const ElementType = Type === 'h1' ? 'h1' : Type === 'h2' ? 'h2' : 'p'; // Domyślnie 'p'
    
    const MotionElement = motion[ElementType]; // Tworzymy dynamicznie komponent motion

    const [InView, setInView] = useState(0)

    return (
        <>
            <MotionElement
                key={InView}
                className={InView ? "TypingText" : "TypingTextReverse"}
                onViewportLeave={()=>{setInView(0)}}
                whileInView={()=>{setInView(1)}}
                viewport={{ once: false, amount: 1 }}
            >
                {Text}
            </MotionElement>
        </>
        
        
    );
}
