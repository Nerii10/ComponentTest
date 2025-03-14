import './WebsiteLink.css'

export default function Websitelink({ icon, name, description }) {
    return (
        <div className='WebsitelinkContainer'>
            <div className="Left">
                <div className="LeftTop">
                    <p style={{fontSize:"30px"}}>{icon}</p>
                    <h2>{name}</h2>
                </div>
                <div className="LeftBottom">
                    <p>{description}</p>
                </div>
            </div>

            <div className="Right">
                <img src={`/ComponentTest/${name}.png`}></img>
            </div>
        </div>
    );
}

