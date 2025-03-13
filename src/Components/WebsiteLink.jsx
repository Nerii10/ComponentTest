import './WebsiteLink.css'

export default function Websitelink({ icon, name }) {
    return (
        <div className='WebsitelinkContainer'>
            <p className='WebsitelinkIcon'>{icon}</p>
            <p className='WebsitelinkName'>{name}</p>
        </div>
    );
}

