import "./HorizontalScroller.css"
import { ArrowLeft,ArrowRight } from "lucide-react"


export default function HorizontalScroller(){

    const list = ["JS", "C++" , "PYTHON" , "C#" , "test4", "test5","test6",]
    
    return(
        <>
            <div className="HorizontalScrollerContainer">
                
                        <div className="ScrollListContainer">
                            <div className="ScrollList">
                                {list.map((ListItem,index)=>{
                                    return(
                                        <li className="HorizontalScrollerInput" key={index}>{ListItem}</li>
                                    )
                                })} 
                            </div>

                            <div className="ScrollList">
                                {list.map((ListItem,index)=>{
                                    return(
                                        <li className="HorizontalScrollerInput" key={index}>{ListItem}</li>
                                    )
                                })} 
                            </div>
                        </div>
            </div>
        </>
    )
}