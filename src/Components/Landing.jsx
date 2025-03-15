import './Landing.css'
import Experience from './Experience'

import {ArrowDown} from 'lucide-react'

export default function Landing(){
    return(
        <>
            <div className='Landing' style={{fontSize:"2.5vw"}}>
                <div style={{left:"10%",top:"25%", position:'absolute'}}>
                    <h1 style={{margin:0}}>Hi, I'm nerii.</h1>
                    <Experience></Experience>
                </div>
                <div style={{left:"50%", 
                    transform: 'translateX(-50%) translateY(-50%)'
                    ,top:"65%", position:'absolute'}}>
                    <ArrowDown 
                    size={80}
                    onClick={() => {
                        const Main = document.getElementById("MainContainer");
                        if (Main) {
                        window.scrollTo({
                            top: Main.offsetTop,
                            behavior: 'smooth',
                        });
                        }
                    }}
                    />

                </div>
            </div>
            <div style={{height:"110%", flexShrink:0}}>

            </div>
        </>
    )
}