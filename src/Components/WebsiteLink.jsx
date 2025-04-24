import './WebsiteLink.css'

export default function Websitelink({ data }) {
    return (
        <a href={data.link} style={{textDecoration:"none"}}>
            <div className='WebsitelinkContainer'>
                <div className="Top">
                    <div className="LeftTop">
                        <p style={{fontSize:"30px"}}>{data.icon}</p>
                        <h2>{data.name}</h2>
                    </div>
                    <div className="LeftBottom">
                        <p>{data.description}</p>
                    </div>
                </div>  

                <div className="Bottom">
                    {data.tech?.map((element,index)=>{
                        return(
                            <img src={`/Logo/${element}.png`} className='Logo'></img>
                        )
                    })}
                </div>
                
            </div>
        </a>
    );
}

