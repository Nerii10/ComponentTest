import "./HorizontalScroller.css";

export default function HorizontalScroller() {
    const list = ["js", "cpp", "jsx", "express", "node", "mongodb", "git", "github", "react", "html", "css"];

    return (
        <div className="HorizontalScrollerContainer">
            <div className="ScrollListContainer">
                {/* Powielamy listę 3 razy dynamicznie */}
                {[...Array(3)].map((_, i) => (
                    <div className="ScrollList" key={i}>
                        {list.map((ListItem, index) => (
                            <img 
                                key={index} 
                                className="HorizontalScrollerInput" 
                                src={`/ComponentTest/Logo/${ListItem}.png`} 
                                alt={ListItem} 
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
