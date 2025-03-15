import "./HorizontalScroller.css"
import { ArrowLeft,ArrowRight } from "lucide-react"


export default function HorizontalScroller(){

    const list = ["js","cpp" , "jsx" , "express" , "node","mongodb", "git","github", "react","html","css"]
    
    return(
        <>
            <div className="HorizontalScrollerContainer">

                     <div className="HorizontalScrollerGradient">
                            t
                        </div>

                        <div className="HorizontalScrollerGradient">
                            t
                        </div>
                        
                        <div className="ScrollListContainer">
                            <div className="ScrollList">
                                {list.map((ListItem,index)=>{
                                    return(
                                        <> 
                                            <img className="HorizontalScrollerInput" src={`/ComponentTest/Logo/${ListItem}.png`}></img>
                                        </>
                                        )
                                })} 
                            </div>

                            <div className="ScrollList">
                                {list.map((ListItem,index)=>{
                                    return(
                                        <> 
                                            <img className="HorizontalScrollerInput" src={`/ComponentTest/Logo/${ListItem}.png`}></img>
                                        </>
                                        )
                                })} 
                            </div>

                            <div className="ScrollList">
                                {list.map((ListItem,index)=>{
                                    return(
                                        <> 
                                            <img className="HorizontalScrollerInput" src={`/ComponentTest/Logo/${ListItem}.png`}></img>
                                        </>
                                        )
                                })} 
                            </div>
                        </div>
            </div>
        </>
    )
}